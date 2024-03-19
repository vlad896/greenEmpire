'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { CardUI } from './CardUI'
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]
const Services = () => {
  return (
    <div className="bg-white py-24">
      <div className="px-6">
        <h2 className="text-[#0027FE] text-2xl text-center font-semibold mb-9 sm:text-3xl lg:text-4xl">
          Наши услуги
        </h2>

        <div className="mx-auto justify-items-center grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 2xl:grid-cols-5 px-4 sm:px-6 lg:py-0  lg:px-12 xl:px-14 xl:grid-cols-5 xl:gap-x-8">
          <CardUI />
          <CardUI />
          <CardUI />
          <CardUI />
          <CardUI />
        </div>
      </div>
    </div>
  )
}

export default Services
