'use client'
import HeroPages4 from '@/components/HeroPages4'
import PreGallery from '@/components/PreGallery'
import { SERVICESPAGE } from '@/helper/helper'

const Services = () => {
  return (
    <>
      <HeroPages4
        desc="Раскройте потенциал вашего бизнеса с нами! В Webmarketing Empire мы предлагаем широкий спектр услуг в области цифрового маркетинга, чтобы помочь вашему бренду добиться выдающихся результатов в онлайн-мире."
        title="Наши услуги"
      />
      <div className="py-12 bg-white">
        <div className="mx-auto px-8 sm:px-6 lg:py-0 md:px-8 xl:px-28 2xl:px-48">
          <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {SERVICESPAGE.map((items, index) => (
              <PreGallery
                image={items.image}
                alt={items.alt}
                h2={items.h2}
                href={items.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
