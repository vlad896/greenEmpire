import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'

export default function About1() {
  return (
    <div className="overflow-hidden bg-white py-16">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex items-center justify-around lg:pr-8 ">
            <div className="flex flex-col  lg:max-w-lg">
              <Typography
                variant="paragraph"
                className="text-3xl font-semibold leading-7 text-indigo-600"
              >
                О Компании
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                Добро пожаловать в виртуальные просторы WebMarketing Empire -
                вашего надежного партнера в мире маркетинга. Мы предлагаем
                комплексные решения для бизнеса всех размеров, помогая нашим
                клиентам достигать новых высот. Наша команда экспертов
                гарантированно выделит ваш бренд на фоне конкурентов и привлечет
                целевую аудиторию. Мы стремимся к тому, чтобы каждый клиент стал
                лидером в своей нише. Успех начинается с нами!
              </Typography>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <Link href={'/aboutUs'}>
                  <Button variant="filled" size="md" color="indigo">
                    Подробнее о Компании
                  </Button>
                </Link>
              </dl>
            </div>
          </div>

          <Image
            src="/assets/it-ChooseUs/programming-background-with-html.webp"
            alt="About Company"
            className="w-[48rem] h-max rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
            width={800}
            height={800}
            loading="lazy"
            fetchPriority="low"
          />
        </div>
      </div>
    </div>
  )
}
