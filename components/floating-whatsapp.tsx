import { clinic } from '@/lib/clinic'
import { WhatsappIcon } from '@/components/whatsapp-icon'

export function FloatingWhatsapp() {
  return (
    <a
      href={clinic.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Necesitas ayuda? Chatea con nosotros por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary opacity-0 shadow-lg ring-1 ring-border transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block sm:translate-x-2">
        ¿Necesitas ayuda? Chatea con nosotros
      </span>
      <span className="relative flex size-15 items-center justify-center">
        <span className="animate-wa-pulse absolute inset-0 rounded-full bg-whatsapp" aria-hidden="true" />
        <span className="relative flex size-15 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/40 transition-transform group-hover:scale-105">
          <WhatsappIcon className="size-8" />
        </span>
      </span>
    </a>
  )
}
