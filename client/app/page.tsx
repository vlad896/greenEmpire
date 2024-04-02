'use client'

import { lazy } from 'react'

const New = lazy(() => import('@/components/New'))
const About1 = lazy(() => import('@/components/About1'))
const CTA = lazy(() => import('@/components/CTA'))
const Services = lazy(() => import('@/components/Services'))
const Advantages = lazy(() => import('@/components/Advantages'))
const LogoClouds = lazy(() => import('@/components/LogoClouds'))
const FAQ = lazy(() => import('@/components/FAQ'))
const Contact = lazy(() => import('@/components/Contact'))
const TESTIMONIAL = lazy(() => import('@/components/testimonial'))
const FooterWithSocialLinks = lazy(
  () => import('@/components/FooterWithSocialLinks')
)
const SpeedDialUi = lazy(() => import('@/components/SpeedDialUi'))

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
        <Services />
      </section>
      <section>
        <Advantages />
      </section>
      <section className="bg-white">
        <LogoClouds />
      </section>
      <section>
        <FAQ />
      </section>
      <section className="bg-white">
        <Contact />
      </section>
      <section className="bg-white">
        <TESTIMONIAL />
      </section>
      <section className="pt-16">
        <FooterWithSocialLinks />
        <SpeedDialUi />
      </section>
    </div>
  )
}
