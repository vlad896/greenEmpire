import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { lazy } from 'react'

const DynamicImage = dynamic(() => import('next/image'))

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen box-border text-white">
      <DynamicImage
        src={'/assets/images/404/notfound-final.webp'}
        alt={'404'}
        width={700}
        height={700}
      />
      <div className="flex items-baseline">
        <h1 className="text-6xl">Упс</h1>
        <h2 className="text-2xl">, кажется Вы заблудились</h2>
      </div>

      <h2 className="text-xl mt-5 ">
        Не переживайте, возможно, эта страницы была удалена или перемещена.
      </h2>
      <h2 className="text-xl mt-5">
        Вернитесь на одну из существующих и продолжайте радовать нас своим
        посещением.
      </h2>
      <div className="mt-3">
        <ul className="flex flex-wrap">
          <li>
            <Link
              className="mt-10 self-center text-sm bg-white px-10 py-3 text-center text-black hover:no-underline sm:block md:px-16 md:text-base md:py-5"
              href="/#"
            >
              Антресоли
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default NotFoundPage
