'use client'
import About1 from '@/components/About1'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import { FooterWithSocialLinks } from '@/components/FooterWithSocialLinks'
import LogoClouds from '@/components/LogoClouds'
import New from '@/components/New'
import Services from '@/components/Services'
import { SpeedDialUi } from '@/components/SpeedDialUi'
import TESTIMONIAL from '@/components/testimonial'

import { Suspense, lazy } from 'react'
// export const metadata: Metadata = {
//   title: {
//     absolute: 'Antresol.bel',
//   },
//   description: 'Лучшие антресоли от поставщиков в Беларуси',
//   alternates: {
//     canonical: `/`,
//   },
// }

const Reviews = lazy(() => import('../components/Reviews'))
const Footer = lazy(() => import('../components/Footer'))
const YouTubeLiteSwiper = lazy(() => import('../components/YoutubeLiteSwiper'))
const PreGallery = lazy(() => import('../components/PreGallery'))
const Advantages = lazy(() => import('../components/Advantages'))
const About = lazy(() => import('../components/About'))

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <New />
      </section>
      <section>
        <About1 />
      </section>
      <section>
        <CTA />
      </section>
      <section className="bg-[#F8F9FF]">
        <Suspense fallback={<p>Loading....</p>}>
          <Services />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<p>Loading....</p>}>
          <Advantages />
        </Suspense>
      </section>
      <section className="bg-white">
        <Suspense fallback={<p>Loading..</p>}>
          <LogoClouds />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<p>Loading..</p>}>
          <FAQ />
        </Suspense>
      </section>
      <section className="bg-white">
        <Suspense fallback={<p>Loading..</p>}>
          <Contact />
        </Suspense>
      </section>
      <section className="bg-white">
        <Suspense fallback={<p>Loading..</p>}>
          <TESTIMONIAL />
        </Suspense>
      </section>
      <section className="pt-16">
        <Suspense fallback={<p>Loading..</p>}>
          <FooterWithSocialLinks />
          <SpeedDialUi />
        </Suspense>
      </section>
    </div>
  )
}
