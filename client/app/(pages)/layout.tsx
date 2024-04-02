'use client'

import FooterWithSocialLinks from '@/components/FooterWithSocialLinks'
import NavBar2 from '@/components/NavBar2'
import SpeedDialUi from '@/components/SpeedDialUi'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar2 />
      {children}
      <FooterWithSocialLinks />
      <SpeedDialUi />
    </section>
  )
}

export default Layout
