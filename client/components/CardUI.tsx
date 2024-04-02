import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'

export function CardUI({
  icon,
  title,
  description,
  href,
}: {
  icon: any
  title: string
  description: string
  href?: any
}) {
  return (
    <Card className="py-4 flex flex-col rounded-3xl shadow-2xl shadow-indigo-500/30">
      <CardBody className="">
        <Image
          className="mb-4 h-20 w-20 text-gray-900 "
          src={icon}
          alt={title}
          width={12}
          height={12}
        />
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Link
          className="flex w-52 justify-center items-center text-xs uppercase text-white rounded-lg p-3 font-semibold bg-[#005BFF]"
          href={href}
        >
          Узнать подробнее
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  )
}
