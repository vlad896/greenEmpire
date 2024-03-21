'use client'
import { FooterWithSocialLinks } from '@/components/FooterWithSocialLinks'
import NavBar2 from '@/components/NavBar2'
import { SpeedDialUi } from '@/components/SpeedDialUi'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="">
      {/* <MegaMenuWithHover /> */}
      <NavBar2 />
      {children}
      <FooterWithSocialLinks />
      <SpeedDialUi />
    </section>
  )
}
