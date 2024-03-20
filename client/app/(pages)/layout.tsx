'use client'
import { FooterWithSocialLinks } from '@/components/FooterWithSocialLinks'
import { MegaMenuWithHover } from '@/components/NavListMenu'
import { SpeedDialUi } from '@/components/SpeedDialUi'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="app">
      <MegaMenuWithHover />
      {children}
      <FooterWithSocialLinks />
      <SpeedDialUi />
    </section>
  )
}
