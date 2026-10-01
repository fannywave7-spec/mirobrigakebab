import { Clock, MapPin, Phone } from 'lucide-react'
import { clinic, navLinks } from '@/lib/clinic'
import { VgsLogo } from '@/components/vgs-logo'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <VgsLogo inverted />
          <p className="mt-5 max-w-sm leading-relaxed text-white/70">
            Odontología integral, personalizada y sin dolor en el corazón de Salamanca.
          </p>
        </div>

        <nav aria-label="Enlaces rápidos">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Enlaces</h2>
          <ul className="mt-4 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="flex min-h-10 items-center text-white/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Clínica</h2>
          <ul className="mt-4 flex flex-col gap-4 text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              {clinic.address}
            </li>
            <li>
              <a href={clinic.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              L-V con cita previa
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Todos los derechos reservados.
          </p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="flex min-h-10 items-center hover:text-white">
                Aviso Legal
              </a>
            </li>
            <li>
              <a href="#" className="flex min-h-10 items-center hover:text-white">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
