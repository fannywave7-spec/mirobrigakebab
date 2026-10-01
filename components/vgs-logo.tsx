import { cn } from '@/lib/utils'

export function ToothMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9 12c4-5 10-5 15-1.5C29 7 35 7 39 12c3.5 4.5 2 10.5-1 15.5-2.2 3.8-2.4 9.5-4 13.5-.9 2.2-3 2.1-3.7-.3L27.6 32c-.9-3-6.3-3-7.2 0l-2.7 8.7c-.7 2.4-2.8 2.5-3.7.3-1.6-4-1.8-9.7-4-13.5-3-5-4.5-11-1-15.5Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function VgsLogo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex size-11 shrink-0 items-center justify-center rounded-xl',
          inverted ? 'bg-white/10' : 'bg-primary',
        )}
      >
        <ToothMark className="size-8 text-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-lg font-bold uppercase tracking-wide',
            inverted ? 'text-white' : 'text-primary',
          )}
        >
          Virginia García
        </span>
        <span
          className={cn(
            'font-heading text-[0.7rem] font-semibold uppercase tracking-[0.2em]',
            inverted ? 'text-accent' : 'text-accent',
          )}
        >
          Clínica Dental · VGS
        </span>
      </span>
    </span>
  )
}
