import Image from 'next/image'

interface Props {
  title?: string
  desc?: string
  desc2?: string
  desc3?: string
  desc4?: string
  title2?: string
  icon?: string
}

const Content = ({
  title,
  desc,
  desc2,
  desc3,
  desc4,
  icon = '',
  title2,
}: Props) => {
  return (
    <div className="mx-auto grid py-10 px-10 max-w-2xl grid-cols-1 gap-x-8  gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              WebMarketing Empire
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-700">{desc}</p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <Image
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] object-cover object-center"
          src={icon}
          alt="workWithUS"
          width={2000}
          height={2000}
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>{desc2}</p>

            <p className="mt-8">{desc3}</p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              {title2}
            </h2>
            <p className="mt-6">{desc4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
