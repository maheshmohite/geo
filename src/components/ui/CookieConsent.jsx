import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'geonectar_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showCustomise, setShowCustomise] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const notify = () => {
    fetch('/cookie-notify.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page:      window.location.href,
        referrer:  document.referrer || 'Direct',
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {})
  }

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    notify()
  }

  const handleRejectAll = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  const handleSavePrefs = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ custom: true, ...prefs }))
    setVisible(false)
    if (prefs.analytics || prefs.marketing) notify()
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999]
                    bg-white border-t-4 border-accent
                    shadow-[0_-8px_48px_rgba(10,31,68,0.18)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 sm:py-6">

        {!showCustomise ? (
          /* ── Default view ─────────────────────────────── */
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h2 className="text-[1.05rem] font-extrabold text-navy mb-2">
                Privacy Preferences
              </h2>
              <p className="text-[0.84rem] text-brand-body leading-relaxed max-w-3xl">
                We use cookies and similar technologies on our website and process your personal
                data (e.g. IP address), for example, to personalise content, analyse traffic,
                and improve your experience. You have the right to consent, reject, or customise
                your preferences at any time. For more information on how we use your data, please
                visit our{' '}
                <Link to="/privacy-policy" className="text-accent font-medium hover:underline underline-offset-2">
                  privacy policy
                </Link>{' '}
                and{' '}
                <Link to="/cookie-policy" className="text-accent font-medium hover:underline underline-offset-2">
                  cookie policy
                </Link>.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={() => setShowCustomise(true)}
                className="px-3 sm:px-5 py-2.5 text-[0.84rem] font-semibold border-2 border-navy/30
                           text-navy rounded-lg hover:border-navy transition-colors text-center"
              >
                Customise
              </button>
              <button
                onClick={handleRejectAll}
                className="px-3 sm:px-5 py-2.5 text-[0.84rem] font-semibold border-2 border-navy/30
                           text-navy rounded-lg hover:border-navy transition-colors text-center"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="px-4 sm:px-6 py-2.5 text-[0.84rem] font-bold bg-navy text-white
                           rounded-lg hover:bg-navy/90 transition-colors text-center"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          /* ── Customise view ───────────────────────────── */
          <div>
            <h2 className="text-[1.05rem] font-extrabold text-navy mb-1">
              Customise Privacy Preferences
            </h2>
            <p className="text-[0.82rem] text-brand-body mb-5 max-w-2xl">
              Choose which cookies you allow. Strictly necessary cookies cannot be disabled
              as they are required for the website to function.
            </p>

            <div className="space-y-3 mb-6">
              {/* Necessary – always on */}
              <div className="flex items-center justify-between bg-brand-light rounded-lg px-5 py-3.5">
                <div>
                  <p className="text-[0.88rem] font-semibold text-navy">Strictly Necessary</p>
                  <p className="text-[0.78rem] text-brand-body mt-0.5">
                    Required for core site functionality. Always active.
                  </p>
                </div>
                <span className="text-[0.75rem] font-bold text-accent uppercase tracking-wide">
                  Always On
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between bg-brand-light rounded-lg px-5 py-3.5">
                <div>
                  <p className="text-[0.88rem] font-semibold text-navy">Analytics</p>
                  <p className="text-[0.78rem] text-brand-body mt-0.5">
                    Helps us understand how visitors interact with the website.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  />
                  <div className="w-10 h-5.5 bg-gray-300 peer-focus:outline-none rounded-full peer
                                  peer-checked:bg-navy after:content-[''] after:absolute after:top-[2px]
                                  after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4
                                  after:transition-all peer-checked:after:translate-x-[18px]" />
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between bg-brand-light rounded-lg px-5 py-3.5">
                <div>
                  <p className="text-[0.88rem] font-semibold text-navy">Marketing</p>
                  <p className="text-[0.78rem] text-brand-body mt-0.5">
                    Used to deliver personalised advertisements and track campaign effectiveness.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  />
                  <div className="w-10 h-5.5 bg-gray-300 peer-focus:outline-none rounded-full peer
                                  peer-checked:bg-navy after:content-[''] after:absolute after:top-[2px]
                                  after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4
                                  after:transition-all peer-checked:after:translate-x-[18px]" />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowCustomise(false)}
                className="px-5 py-2.5 text-[0.84rem] font-semibold border-2 border-navy/30
                           text-navy rounded-lg hover:border-navy transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleRejectAll}
                className="px-5 py-2.5 text-[0.84rem] font-semibold border-2 border-navy/30
                           text-navy rounded-lg hover:border-navy transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePrefs}
                className="px-6 py-2.5 text-[0.84rem] font-bold bg-accent text-white
                           rounded-lg hover:bg-accent/90 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-[0.84rem] font-bold bg-navy text-white
                           rounded-lg hover:bg-navy/90 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
