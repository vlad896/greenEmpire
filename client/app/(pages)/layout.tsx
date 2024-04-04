'use client'

import FooterWithSocialLinks from '@/components/FooterWithSocialLinks'
import NavBar2 from '@/components/NavBar2'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar2 />
      {children}
      <FooterWithSocialLinks />
    </section>
  )
}

export default Layout
