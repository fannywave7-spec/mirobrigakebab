import { ArrowRight, HeartPulse, Sparkles, Smile, Stethoscope, Wrench, type LucideIcon } from 'lucide-react'

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Stethoscope,
    title: 'Odontología General y Preventiva',
    description: 'Revisiones, empastes, endodoncias y odontopediatría para cuidar la salud de toda la familia.',
  },
  {
    icon: Smile,
    title: 'Ortodoncia e Invisalign',
    description: 'Alinea tu sonrisa con ortodoncia invisible o brackets, con planes adaptados a cada edad.',
  },
  {
    icon: Sparkles,
    title: 'Estética Dental y Blanqueamiento',
    description: 'Blanqueamientos, carillas y diseño de sonrisa para una estética natural y luminosa.',
  },
  {
    icon: Wrench,
    title: 'Implantología y Prótesis',
    description: 'Recupera piezas perdidas con implantes y prótesis de alta calidad, funcionales y duraderas.',
  },
  {
    icon: HeartPulse,
    title: 'Higiene Buco-Dental y Periodoncia',
    description: 'Limpiezas profesionales y tratamiento de encías para prevenir y frenar la enfermedad periodontal.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Servicios</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
            Tratamientos integrales para cada etapa de tu sonrisa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Diagnóstico preciso y tratamientos a medida, siempre explicados con claridad y sin prisas.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-secondary hover:shadow-xl hover:shadow-accent/15"
            >
              <span className="flex size-14 items-center justify-center rounded-xl bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-heading text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-2xl bg-primary p-7 text-white">
            <div>
              <h3 className="font-heading text-xl font-bold">¿No sabes qué tratamiento necesitas?</h3>
              <p className="mt-2 leading-relaxed text-white/75">
                Te hacemos una valoración personalizada y te explicamos todas las opciones.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-6 flex h-12 w-fit items-center gap-2 rounded-full bg-accent px-6 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              Pedir valoración
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
