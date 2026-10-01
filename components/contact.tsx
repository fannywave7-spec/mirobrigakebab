import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { clinic } from '@/lib/clinic'
import { WhatsappIcon } from '@/components/whatsapp-icon'

const hours = [
  { days: 'Lunes y Viernes', time: '9:30 - 16:00' },
  { days: 'Martes y Jueves', time: '9:30 - 14:00 | 16:30 - 20:00' },
  { days: 'Miércoles', time: '9:30 - 20:00' },
  { days: 'Sábado y Domingo', time: 'Cerrado', closed: true },
]

export function Contact() {
  return (
    <section id="contacto" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contacto</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
            Pide tu cita, estamos muy cerca de ti
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-border bg-white lg:col-span-3">
            <iframe
              title={`Mapa de ubicación: ${clinic.address}`}
              src={clinic.mapsEmbed}
              className="h-80 w-full lg:h-full lg:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-3xl bg-primary p-7 text-white">
              <div className="flex items-center gap-3">
                <Clock className="size-6 text-accent" aria-hidden="true" />
                <h3 className="font-heading text-xl font-bold">Horario</h3>
              </div>
              <dl className="mt-5 flex flex-col divide-y divide-white/10">
                {hours.map((h) => (
                  <div key={h.days} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="font-medium text-white/80">{h.days}</dt>
                    <dd className={h.closed ? 'font-semibold text-accent' : 'font-semibold'}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={clinic.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-accent"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                  <MapPin className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Dirección</h3>
                  <p className="text-muted-foreground">{clinic.address}</p>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Cómo llegar <Navigation className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </a>

              <div className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Phone className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Teléfono</h3>
                  <a href={clinic.phoneHref} className="text-muted-foreground hover:text-accent">
                    {clinic.phoneDisplay}
                  </a>
                  <a
                    href={clinic.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-whatsapp"
                  >
                    <WhatsappIcon className="size-4" /> Escríbenos por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
