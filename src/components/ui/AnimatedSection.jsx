import { motion } from 'framer-motion'

const variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Wraps children in a Framer Motion div that fades up when scrolled into view.
 * @param {number} delay - stagger delay in seconds (default 0)
 */
export default function AnimatedSection({ children, className = '', delay = 0, amount = 0.12 }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
