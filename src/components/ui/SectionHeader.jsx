import AnimatedSection from './AnimatedSection'
import clsx from 'clsx'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  className = '',
}) {
  return (
    <AnimatedSection className={clsx(center && 'text-center', className)}>
      {eyebrow && (
        <span className={clsx(
          'section-eyebrow',
          light && 'text-accent/90'
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={clsx('section-title', light && '!text-white')}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          'section-sub',
          center && 'max-w-xl mx-auto',
          light && '!text-white/65'
        )}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
