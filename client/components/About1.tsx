import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { Button, Typography } from '@material-tailwind/react'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
]

export default function About1() {
  return (
    <div className="overflow-hidden bg-white sm:py-20">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex items-center justify-around lg:pr-8 ">
            <div className="flex flex-col  lg:max-w-lg">
              <Typography
                variant="h2"
                className="text-3xl font-semibold leading-7 text-indigo-600"
              >
                О Компании
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Typography>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
                <Button variant="filled" size="md" color="indigo">
                  Подробнее
                </Button>
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] h-max rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
