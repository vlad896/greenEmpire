'use client'
import Content from '@/components/Content'
import HeroPages4 from '@/components/HeroPages4'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div>
      <HeroPages4
        button="Подробнее"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            repellat delectus adipisci maxime ex consequuntur qui harum
            reiciendis quas distinctio. Quas aspernatur possimus dignissimos
            voluptates reiciendis facere quo in. Vel?"
        icon="/assets/it-ChooseUs/2148890074.webp"
        title="О нашей компании"
      />
      <div className="overflow-hidden bg-white sm:py-20">
        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex items-center justify-around lg:pr-8 ">
              <div className="flex flex-col  lg:max-w-lg">
                <Typography
                  variant="h2"
                  className="text-3xl font-semibold leading-7 text-indigo-600"
                >
                  Наша миссия
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  Добро пожаловать в виртуальные просторы WebMarketingEmpire,
                  где каждый бит и байт пронизан страстью к инновациям и
                  стремлением к совершенству. Наша команда состоит из
                  талантливых и преданных профессионалов, которые готовы принять
                  любой вызов и преобразить его в успех. Мы не боимся
                  экспериментировать, искать новые подходы и находить
                  нестандартные решения – ведь именно это позволяет нам
                  оставаться на переднем крае индустрии.
                </Typography>
              </div>
            </div>

            <Image
              src="/assets/it-ChooseUs/business-people-having-meeting.webp"
              alt="Product screenshot"
              className="w-[48rem] h-max rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="overflow-hidden bg-black/50 py-24 sm:py-32 px-3">
            <Image
              src="/assets/it-ChooseUs/image.webp"
              alt="WorkWithUs"
              width={2030}
              height={2030}
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            <div
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  C нами так классно работать
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"></div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <Content />
      </div>
    </div>
  )
}

export default AboutUs
