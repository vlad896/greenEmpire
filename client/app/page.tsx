'use client'
// import About1 from '@/components/About1'
// import Advantages from '@/components/Advantages'
// import CTA from '@/components/CTA'
// import Contact from '@/components/Contact'
// import FAQ from '@/components/FAQ'
// import FooterWithSocialLinks from '@/components/FooterWithSocialLinks'
// //import New from '@/components/New'
// import Services from '@/components/Services'
// import TESTIMONIAL from '@/components/testimonial'
import { lazy } from 'react'

const New = lazy(() => import('../components/New'))
const About1 = lazy(() => import('../components/About1'))
const CTA = lazy(() => import('../components/CTA'))
const Services = lazy(() => import('../components/Services'))
const Advantages = lazy(() => import('../components/Advantages'))
const FAQ = lazy(() => import('../components/FAQ'))
const Contact = lazy(() => import('../components/Contact'))
const TESTIMONIAL = lazy(() => import('../components/testimonial'))
const FooterWithSocialLinks = lazy(
  () => import('../components/FooterWithSocialLinks')
)
export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <New />
      </section>
      <section className="bg-white">
        <About1 />
      </section>
      <section>
        <CTA />
      </section>
      <section className="bg-[#F8F9FF]">
        <Services />
      </section>
      <section>
        <Advantages />
      </section>
      <section className="bg-white">
        <FAQ />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <TESTIMONIAL />
      </section>
      <section>
        <FooterWithSocialLinks />
      </section>
    </div>
  )
}
