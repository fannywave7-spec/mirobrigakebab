import Image from 'next/image'
import { Phone, ShieldCheck, Star } from 'lucide-react'
import { clinic } from '@/lib/clinic'
import { WhatsappIcon } from '@/components/whatsapp-icon'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-secondary to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-16">
        <div className="flex flex-col">
          <a
            href="#resenas"
            className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-white py-1.5 pl-2 pr-4 shadow-sm transition-colors hover:border-accent"
          >
            <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-sm font-bold text-white">
              <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              {clinic.rating}/5
            </span>
            <span className="text-sm text-muted-foreground">
              <strong className="font-semibold text-primary">{clinic.reviews} opiniones</strong> positivas en Google Maps
            </span>
          </a>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-primary text-balance sm:text-5xl lg:text-6xl">
            Tu Sonrisa en Las Mejores Manos en <span className="text-accent">Salamanca</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Atención odontológica integral, personalizada y sin dolor. Cuidamos de tu salud bucodental con la más alta
            tecnología.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:-translate-y-0.5"
            >
              <WhatsappIcon className="size-5" />
              Reservar Cita por WhatsApp
            </a>
            <a
              href={clinic.phoneHref}
              className="flex h-14 items-center justify-center gap-2.5 rounded-full border-2 border-primary px-7 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Phone className="size-5" aria-hidden="true" />
              Llamar Ahora ({clinic.phoneDisplay})
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {['Primera valoración personalizada', 'Financiación a medida', 'Céntrico en Salamanca'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-primary/15">
            <Image
              src="/images/gabinete-azul.jpg"
              alt="Gabinete de la clínica con sillón dental azul marino y equipamiento moderno"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-6">
            <div className="flex -space-x-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="font-heading text-xl font-bold text-primary">{clinic.rating} en Google</p>
              <p className="text-xs text-muted-foreground">{clinic.reviews} pacientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
