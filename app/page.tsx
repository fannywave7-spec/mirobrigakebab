import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Reviews } from '@/components/reviews'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsapp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  )
}
