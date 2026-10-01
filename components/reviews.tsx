import { ExternalLink, Quote, Star } from 'lucide-react'
import { clinic } from '@/lib/clinic'

const testimonials = [
  {
    name: 'María L.',
    time: 'Hace 2 semanas',
    text: 'Profesionalidad de principio a fin. La doctora Virginia explica todo con muchísima paciencia y el resultado de mi tratamiento ha sido perfecto.',
  },
  {
    name: 'Javier R.',
    time: 'Hace 1 mes',
    text: 'Siempre he tenido miedo al dentista y aquí por fin he ido tranquilo. No sentí ningún dolor. Trato cariñoso y muy cercano.',
  },
  {
    name: 'Carmen S.',
    time: 'Hace 2 meses',
    text: 'Llevo a toda mi familia desde hace años. Clínica impecable, puntuales y un equipo encantador. ¡No la cambio por nada!',
  },
]

function Stars({ className = 'size-4' }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="resenas" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Reseñas</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
              Lo que dicen nuestros pacientes
            </h2>
          </div>

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary p-5">
            <p className="font-heading text-5xl font-bold text-primary">{clinic.rating}</p>
            <div>
              <Stars className="size-5" />
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="sr-only">{clinic.rating} de 5 estrellas. </span>
                {clinic.reviews} opiniones en <strong className="font-semibold text-primary">Google</strong>
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <Stars />
                <Quote className="size-7 text-accent/30" aria-hidden="true" />
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                <p>{`“${t.text}”`}</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className="flex size-11 items-center justify-center rounded-full bg-primary font-heading font-bold text-white"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.time} · Google</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href={clinic.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2 rounded-full border-2 border-primary px-6 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Ver todas las reseñas en Google
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
