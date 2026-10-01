import Image from 'next/image'
import { Cpu, HandHeart, ShieldPlus, type LucideIcon } from 'lucide-react'

const pillars: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HandHeart,
    title: 'Trato Cercano y Personalizado',
    description: 'Te escuchamos, resolvemos tus dudas y diseñamos cada tratamiento pensando en ti.',
  },
  {
    icon: Cpu,
    title: 'Tecnología de Vanguardia',
    description: 'Gabinetes equipados con sillones de última generación y radiología digital.',
  },
  {
    icon: ShieldPlus,
    title: 'Atención Sin Dolor',
    description: 'Técnicas mínimamente invasivas y anestesia cuidadosa para tu total tranquilidad.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/sala-espera.jpg"
              alt="Sala de espera luminosa y minimalista con sillas blancas y orquídeas"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/gabinete-granate.jpg"
              alt="Gabinete dental con sillón de última generación"
              fill
              sizes="(min-width: 1024px) 260px, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de la Clínica Dental Virginia García con el logotipo VGS"
              fill
              sizes="(min-width: 1024px) 260px, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Sobre Nosotros</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
            Dra. Virginia García Sánchez y su equipo de expertos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            En nuestra clínica de Salamanca combinamos la experiencia clínica de la Dra. García Sánchez con un equipo
            cercano y en formación continua. Unas instalaciones modernas, limpias y acogedoras, pensadas para que te
            sientas como en casa desde que cruzas la puerta.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {pillars.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
