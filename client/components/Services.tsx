'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { CardUI } from './CardUI'
export const SERVICES = [
  {
    icon: '/assets/services/1.svg',
    title: 'Аналитика',
    alt: 'IconAnalitic',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem architecto reprehenderit doloremque officiis ex sit. Nulla est ut.',
    href: '/services/analitic',
  },
  {
    icon: '/assets/services/3.svg',
    title: 'Стратегия',
    alt: 'IconStrategy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem architecto reprehenderit doloremque officiis ex sit. Nulla est ut.',
    href: '/services/strategy',
  },
  {
    icon: '/assets/services/2.svg',
    title: 'Дизайн',
    alt: 'IconDesign',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem architecto reprehenderit doloremque officiis ex sit. Nulla est ut.',
    href: '/services/design',
  },
  {
    icon: '/assets/services/4.svg',
    title: 'Разработка сайтов',
    alt: 'IconDevelopment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem architecto reprehenderit doloremque officiis ex sit. Nulla est ut.',
    href: '/services/development',
  },
  {
    icon: '/assets/services/5.svg',
    title: 'SMM',
    alt: 'IconSMM',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem architecto reprehenderit doloremque officiis ex sit. Nulla est ut.',
    href: '/services/smm',
  },
]

const Services = () => {
  return (
    <div className="bg-white py-24">
      <div className="px-6">
        <h2 className="text-[#0027FE] text-2xl text-center font-semibold mb-9 sm:text-3xl lg:text-4xl">
          Наши услуги
        </h2>

        <div className="mx-auto justify-items-center grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 2xl:grid-cols-5 px-4 sm:px-6 lg:py-0  lg:px-4 xl:px-6 xl:grid-cols-5 xl:gap-x-5">
          {SERVICES.map((items, index) => (
            <CardUI
              key={index}
              icon={items.icon}
              title={items.title}
              description={items.description}
              href={items.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
