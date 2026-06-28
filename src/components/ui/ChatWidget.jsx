import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

// ── Predefined knowledge base ────────────────────────────────────────────────
const KB = {
  services: {
    bim: {
      label: 'BIM Services',
      text: 'Our BIM Services cover 3D modeling, clash detection, LOD 100–500 deliverables, and coordination drawings for commercial, residential, and infrastructure projects.',
    },
    alta: {
      label: 'ALTA/NSPS Surveys',
      text: 'We provide ALTA/NSPS land title surveys, boundary surveys, and topographic surveys compliant with the latest ALTA standards — ideal for real estate transactions and development.',
    },
    structural: {
      label: 'Structural Engineering',
      text: 'Our structural team delivers analysis, design, and shop drawings for steel, concrete, timber, and masonry structures — residential to large-scale commercial.',
    },
    mep: {
      label: 'MEP Services',
      text: 'We offer full MEP (Mechanical, Electrical, Plumbing) coordination drawings, clash detection, and as-built documentation for new construction and renovation projects.',
    },
    civil: {
      label: 'Civil Engineering',
      text: 'Geo-Nectar delivers site grading plans, road design, utility layout, drainage design, and permit-ready civil drawings for land development projects worldwide.',
    },
    cad: {
      label: 'CAD Drafting',
      text: 'We provide precision 2D CAD drafting, plan conversions, as-built drawings, and detail sheets across all engineering disciplines and standards (AutoCAD, MicroStation).',
    },
  },
  about:
    'Geo-Nectar Technologies is a leading geospatial and engineering services firm with 150+ completed projects across 6 verticals. ISO-certified, we serve clients in the USA, UK, Canada, UAE, and Australia.',
  contact:
    'You can reach us at:\n📧 services@geo-nectar.com\n📞 +1 409 934 5355\n🌐 www.geo-nectar.com\nWe typically respond within 1 business day.',
  industries:
    'We serve: Commercial Real Estate, Residential Development, Infrastructure & Transportation, Healthcare Facilities, Industrial & Warehousing, and Hospitality & Retail sectors.',
}

const SERVICE_OPTIONS = Object.entries(KB.services).map(([, v]) => v.label)

// ── Bot response builder ─────────────────────────────────────────────────────
function botMsg(text, quickReplies = []) {
  return { from: 'bot', text, quickReplies }
}

const MAIN_MENU = ['Our Services', 'Industries We Serve', 'About Geo-Nectar', 'Contact Info', 'Get a Quote']
const SERVICE_MENU = [...Object.values(KB.services).map(s => s.label), '← Back']

// ── Lead helpers ─────────────────────────────────────────────────────────────
function saveLead(lead) {
  const existing = JSON.parse(localStorage.getItem('geo_nectar_leads') || '[]')
  existing.push({ ...lead, id: Date.now(), timestamp: new Date().toISOString(), status: 'new' })
  localStorage.setItem('geo_nectar_leads', JSON.stringify(existing))
}

// ── Lead capture steps ───────────────────────────────────────────────────────
const LEAD_STEPS = ['name', 'email', 'phone', 'service', 'message']

function nextLeadPrompt(step) {
  switch (step) {
    case 'name':    return botMsg("Great! What's your full name?")
    case 'email':   return botMsg("Thanks! What's your email address?")
    case 'phone':   return botMsg("And your phone number? (optional)", ['Skip'])
    case 'service': return botMsg('Which service are you interested in?', SERVICE_OPTIONS)
    case 'message': return botMsg('Please briefly describe your project or requirements.')
    default:        return null
  }
}

// ── Component ────────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    botMsg(
      "👋 Hi! Welcome to Geo-Nectar Technologies. How can I help you today?",
      MAIN_MENU
    ),
  ])
  const [input, setInput] = useState('')
  const [leadMode, setLeadMode] = useState(false)
  const [leadStep, setLeadStep] = useState(0)
  const [leadData, setLeadData] = useState({})
  const [done, setDone] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function addMessages(...msgs) {
    setMessages(prev => [...prev, ...msgs])
  }

  // ── Handle any user input (text or quick reply) ──────────────────────────
  function handleUserInput(text) {
    if (!text.trim() || done) return

    const userBubble = { from: 'user', text }
    setInput('')

    if (leadMode) {
      handleLeadStep(text, userBubble)
      return
    }

    handleMenu(text, userBubble)
  }

  // ── Menu routing ─────────────────────────────────────────────────────────
  function handleMenu(text, userBubble) {
    const t = text.trim()

    // Main menu
    if (t === 'Our Services') {
      addMessages(userBubble, botMsg('Here are our core services. Which one would you like to know more about?', SERVICE_MENU))
      return
    }
    if (t === 'Industries We Serve') {
      addMessages(userBubble, botMsg(KB.industries, [...MAIN_MENU]))
      return
    }
    if (t === 'About Geo-Nectar') {
      addMessages(userBubble, botMsg(KB.about, [...MAIN_MENU]))
      return
    }
    if (t === 'Contact Info') {
      addMessages(userBubble, botMsg(KB.contact, ['Get a Quote', '← Main Menu']))
      return
    }
    if (t === 'Get a Quote') {
      addMessages(
        userBubble,
        botMsg("I'd be happy to connect you with our team! I'll collect a few quick details.")
      )
      setLeadMode(true)
      setLeadStep(0)
      setLeadData({})
      setTimeout(() => addMessages(nextLeadPrompt('name')), 300)
      return
    }

    // Service detail
    const serviceEntry = Object.values(KB.services).find(s => s.label === t)
    if (serviceEntry) {
      addMessages(
        userBubble,
        botMsg(serviceEntry.text, ['Get a Quote', '← Services', '← Main Menu'])
      )
      return
    }

    // Back buttons
    if (t === '← Back' || t === '← Services') {
      addMessages(userBubble, botMsg('Which service would you like to explore?', SERVICE_MENU))
      return
    }
    if (t === '← Main Menu') {
      addMessages(userBubble, botMsg('How can I help you?', MAIN_MENU))
      return
    }

    // Fallback for free-text in menu mode
    addMessages(
      userBubble,
      botMsg("I'm here to help you learn about Geo-Nectar or connect you with our team. Please choose an option:", MAIN_MENU)
    )
  }

  // ── Lead capture step handler ────────────────────────────────────────────
  function handleLeadStep(text, userBubble) {
    const stepKey = LEAD_STEPS[leadStep]
    const value = text === 'Skip' ? '' : text.trim()

    // Basic email validation
    if (stepKey === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      addMessages(userBubble, botMsg("That doesn't look like a valid email. Please try again."))
      return
    }

    const updatedLead = { ...leadData, [stepKey]: value }
    setLeadData(updatedLead)

    const nextStep = leadStep + 1

    if (nextStep >= LEAD_STEPS.length) {
      // All steps collected — save lead
      saveLead(updatedLead)
      setLeadMode(false)
      setDone(true)
      addMessages(
        userBubble,
        botMsg(
          `Thank you, ${updatedLead.name}! 🎉 Your enquiry has been received. A Geo-Nectar specialist will reach out to you at ${updatedLead.email} within 1 business day.\n\nIs there anything else you'd like to know?`,
          ['← Main Menu']
        )
      )
      setDone(false) // allow continued browsing
    } else {
      setLeadStep(nextStep)
      addMessages(userBubble, nextLeadPrompt(LEAD_STEPS[nextStep]))
    }
  }

  function handleSend() {
    handleUserInput(input)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function handleQuickReply(reply) {
    handleUserInput(reply)
  }

  return (
    <>
      {/* ── Trigger button ──────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Chat with us'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#F05A28] text-white shadow-float flex items-center justify-center hover:bg-[#d94e20] transition-colors"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* ── Chat panel ──────────────────────────────────────────────────── */}
      {open && (
        <div className="fixed bottom-24 right-0 left-0 mx-3 sm:left-auto sm:right-6 sm:mx-0 sm:w-96 z-50 flex flex-col rounded-2xl overflow-hidden shadow-float border border-gray-100 bg-white">

          {/* Header */}
          <div className="bg-[#0A1F44] text-white px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F05A28] flex items-center justify-center flex-shrink-0">
              <Bot size={18} />
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">GeoBot</p>
              <p className="text-xs text-blue-200 leading-tight">Geo-Nectar Assistant · Always Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-80 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white ${
                    msg.from === 'bot' ? 'bg-[#0A1F44]' : 'bg-[#F05A28]'
                  }`}
                >
                  {msg.from === 'bot' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="flex flex-col gap-1 max-w-[78%]">
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm leading-snug whitespace-pre-line ${
                      msg.from === 'bot'
                        ? 'bg-white text-gray-800 border border-gray-200 rounded-tl-sm'
                        : 'bg-[#F05A28] text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {/* Quick replies — only for last bot message */}
                  {msg.from === 'bot' && msg.quickReplies?.length > 0 && i === messages.length - 1 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {msg.quickReplies.map(qr => (
                        <button
                          key={qr}
                          onClick={() => handleQuickReply(qr)}
                          className="text-xs px-2.5 py-1 rounded-full border border-[#F05A28] text-[#F05A28] hover:bg-[#F05A28] hover:text-white transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="flex gap-2 items-end">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message…"
                className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#F05A28] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-[#F05A28] text-white flex items-center justify-center hover:bg-[#d94e20] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <Send size={15} />
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  )
}
