'use client'
import About1 from '@/components/About1'
import Banner from '@/components/Banner'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import { FooterWithSocialLinks } from '@/components/FooterWithSocialLinks'
import LogoClouds from '@/components/LogoClouds'
import New from '@/components/New'
import Services from '@/components/Services'
import { SpeedDialUi } from '@/components/SpeedDialUi'
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
      {/* <section
        id="main"
        className="background-image-antresol px-5 text-[--text-primary] md:px-16 xl:px-44"
      >
        <Header />
      </section> */}
      <section>
        <New />
      </section>
      <section>
        
      </section>
      <section id="catalog">
        <About1 />
        {/* <PreGallery /> */}
      </section>
      <section id="catalog">
        <CTA />
        {/* <PreGallery /> */}
      </section>
      <section className="bg-[#F8F9FF]">
        <Suspense fallback={<p>Loading....</p>}>
          <Services />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<p>Loading....</p>}>
          {/* <About /> */}

          <Advantages />
        </Suspense>
      </section>
      <section id="reviews" className="bg-white">
        <Suspense fallback={<p>Loading..</p>}>
          {/* <Reviews data={REVIEWS_ANTRESOL} /> */}
          <LogoClouds />
        </Suspense>
      </section>
      <section className="">
        <Suspense fallback={<p>Loading..</p>}>
          {/* <YouTubeLiteSwiper videos={YOUTUBE_VIDEOS} /> */}
          <FAQ />
        </Suspense>
      </section>
      <section className="bg-white">
        <Suspense fallback={<p>Loading..</p>}>
          {/* <YouTubeLiteSwiper videos={YOUTUBE_VIDEOS} /> */}
          <Contact />
        </Suspense>
      </section>
      <section id="contacts" className="pt-16 ">
        <Suspense fallback={<p>Loading..</p>}>
          {/* <Footer /> */}
          <FooterWithSocialLinks />
          <SpeedDialUi />
        </Suspense>
      </section>
    </div>
  )
}
