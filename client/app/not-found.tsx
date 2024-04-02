'use client'
import dynamic from 'next/dynamic'

const DynamicImage = dynamic(() => import('next/image'))

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center  items-center h-screen box-border ">
        <DynamicImage
          src={'/assets/images/404/notfound-final.webp'}
          alt={'404'}
          width={700}
          height={700}
          className="mb-6"
        />
        <div className="flex items-baseline">
          <p className="text-6xl">Упс</p>
          <p className="text-2xl">, кажется Вы заблудились</p>
        </div>

        <p className="text-xl mt-5 ">
          Не переживайте, возможно, эта страницы была удалена или перемещена.
        </p>
        <p className="text-xl mt-5">
          Вернитесь на одну из существующих и продолжайте радовать нас своим
          посещением.
        </p>
      </div>
    </>
  )
}
export default NotFoundPage
