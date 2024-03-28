import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react'
import React from 'react'

const FAQ = [
  {
    id: 1,
    title: 'How to use Material Tailwind?',
    desc: 'We&apos;re not always in the position that we want to be at.We&apos;re constantly growing. We&apos;re constantly making mistakes We&apos;re constantly trying to express ourselves and actualize our dreams.',
  },
  {
    id: 2,
    title: 'How to use Material Tailwind?',
    desc: 'We&apos;re not always in the position that we want to be at.We&apos;re constantly growing. We&apos;re constantly making mistakes We&apos;re constantly trying to express ourselves and actualize our dreams.',
  },
  {
    id: 3,
    title: 'How to use Material Tailwind?',
    desc: 'We&apos;re not always in the position that we want to be at.We&apos;re constantly growing. We&apos;re constantly making mistakes We&apos;re constantly trying to express ourselves and actualize our dreams.',
  },
  {
    id: 4,
    title: 'How to use Material Tailwind?',
    desc: 'We&apos;re not always in the position that we want to be at.We&apos;re constantly growing. We&apos;re constantly making mistakes We&apos;re constantly trying to express ourselves and actualize our dreams.',
  },
  {
    id: 5,
    title: 'How to use Material Tailwind?',
    desc: 'We&apos;re not always in the position that we want to be at.We&apos;re constantly growing. We&apos;re constantly making mistakes We&apos;re constantly trying to express ourselves and actualize our dreams.',
  },
]

export function AccordionUI() {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex flex-col gap-3">
      {FAQ.map((items, index) => (
        <Accordion
          key={index}
          open={open === items.id}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(items.id)}
            className={`border-b-0 transition-colors ${
              open === items.id ? 'text-blue-500 hover:!text-blue-700' : ''
            }`}
          >
            {items.title}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            {items.desc}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  )
}
