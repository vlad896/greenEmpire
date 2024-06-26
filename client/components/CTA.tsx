import Image from 'next/image'
import Link from 'next/link'
import { DialogButton } from './DialogButton'

const CTA = () => {
  return (
    <div>
      <div className="">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-10 sm:pt-10 shadow-2xl sm:px-8 md:pt-24 xl:px-20 lg:flex  2xl:px-32 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className=" lg:flex justify-center items-center py-16 gap-10">
            <div className=" lg:w-1/2">
              <Image
                className="object-cover rounded-md bg-white/5 ring-1 ring-white/10"
                src="/assets/it-ChooseUs/d22f6fabce6ab1bb83ced8ea318a4392.webp"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
            <div className=" lg:w-1/2 pt-5 md:p-8">
              <h2 className="text-3xl text-center md:text-start   font-bold tracking-tight  text-white sm:text-4xl">
                Улучши свой бизнес
              </h2>
              <h2 className="text-2xl text-center mt-3 md:text-start font-bold sm:tracking-tight leading-loose text-white sm:text-4xl">
                Начни заказывать у нас.
              </h2>
              <p className="text-justify mt-6 text-lg leading-8 text-gray-300 ">
                Прославленные рекомендации, высшие стандарты качества, Мы
                воплотим ваши идеи в жизнь с легкостью. Развивай свой бизнес,
                доверься профессионалам, Наши услуги — ключ к успеху без забот и
                проблем
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start font-[--font-spaceGrotesk]">
                <DialogButton
                  color="#fff"
                  textColor="#000"
                  icon={false}
                  text="Заказать"
                />
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Узнать больше <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CTA
