'use client'
import Advantages from '@/components/Advantages'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import FooterWithSocialLinks from '@/components/FooterWithSocialLinks'
import New from '@/components/New'
import Services from '@/components/Services'
import TESTIMONIAL from '@/components/testimonial'
import dynamic from 'next/dynamic'

const DynamicAbout1 = dynamic(() => import('@/components/About1'), {
  ssr: true,
})

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <New />
      </section>
      <section className="bg-white">
        <DynamicAbout1 />
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
