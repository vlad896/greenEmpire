'use client'
import Header from '@/components/Header'
import { REVIEWS_ANTRESOL } from '@/models/helper'
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
    <div className="flex flex-col gap-20 ">
      <section
        id="main"
        className="background-image-antresol px-5 text-[--text-primary] md:px-16 xl:px-48"
      >
        <Header />
      </section>

      <section id="catalog">
        
        <PreGallery />
      </section>
      <section className="bg-[--bg-color-dark] pb-20">
        <Suspense fallback={<p>Loading....</p>}>
          <Advantages />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<p>Loading....</p>}>
          <About />
        </Suspense>
      </section>
      <section id="reviews">
        <Suspense fallback={<p>Loading..</p>}>
          <Reviews data={REVIEWS_ANTRESOL} />
        </Suspense>
      </section>
      {/* <section>
        <Suspense fallback={<p>Loading..</p>}>
          <YouTubeLiteSwiper videos={YOUTUBE_VIDEOS} />
        </Suspense>
      </section> */}
      <section id="contacts" className="pb-16">
        <Suspense fallback={<p>Loading..</p>}>
          <Footer />
        </Suspense>
      </section>
    </div>
  )
}
