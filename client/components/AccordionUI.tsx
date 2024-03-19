import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react'
import React from 'react'

export function AccordionUI() {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex flex-col gap-3">
      <Accordion
        open={open === 1}
        className="rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className=" rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className=" rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        className=" rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 6}
        className=" rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition-colors ${
            open === 6 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 7}
        className=" rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`border-b-0 transition-colors ${
            open === 7 ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  )
}
