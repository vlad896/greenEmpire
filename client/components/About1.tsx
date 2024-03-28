import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'

export default function About1() {
  return (
    <div className="overflow-hidden bg-white sm:py-20">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                Добро пожаловать в виртуальные просторы WebMarketingEmpire, где
                каждый бит и байт пронизан страстью к инновациям и стремлением к
                совершенству. Наша команда состоит из талантливых и преданных
                профессионалов, которые готовы принять любой вызов и преобразить
                его в успех. Мы не боимся экспериментировать, искать новые
                подходы и находить нестандартные решения – ведь именно это
                позволяет нам оставаться на переднем крае индустрии.
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
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  )
}
