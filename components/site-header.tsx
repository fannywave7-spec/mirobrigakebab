'use client'

import { useState } from 'react'
import { CalendarCheck, Menu, Phone, X } from 'lucide-react'
import { clinic, navLinks } from '@/lib/clinic'
import { VgsLogo } from '@/components/vgs-logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label={`${clinic.name}, ir al inicio`} onClick={() => setOpen(false)}>
          <VgsLogo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            <Phone className="size-4 text-accent" aria-hidden="true" />
            {clinic.phoneDisplay}
          </a>
          <a
            href="#contacto"
            className="flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Pedir Cita
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={clinic.phoneHref}
            aria-label={`Llamar al ${clinic.phoneDisplay}`}
            className="flex size-11 items-center justify-center rounded-full text-primary hover:bg-secondary"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="flex size-11 items-center justify-center rounded-full text-primary hover:bg-secondary"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Móvil" className="border-t border-border bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-border/60 text-base font-medium text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-base font-semibold text-primary-foreground"
          >
            <CalendarCheck className="size-5" aria-hidden="true" />
            Pedir Cita
          </a>
        </nav>
      )}
    </header>
  )
}
