import { XMarkIcon } from '@heroicons/react/20/solid'
import { Button, Dialog, DialogBody } from '@material-tailwind/react'
import { default as Link } from 'next/link'
import React from 'react'
import OrderForm2 from './OrderForm'

export function DialogButton({
  color = '#005BFF',
  textColor = '#fff',
  text = 'Узнать подробнее',
  icon = true,
  link = false,
  href = '/',
}: {
  color?: string
  textColor?: string
  text?: string
  icon?: boolean
  link?: boolean
  href?: string
}) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(!open)

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="filled"
        style={{
          backgroundColor: color,
          color: textColor,
          fontWeight: 'bold',
        }}
        className="flex w-44 p-2  sm:w-52 sm:p-4 justify-center font-[--font-spaceGrotesk]"
      >
        {text}
        {icon ? (
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
        ) : (
          ''
        )}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className=" overflow-y-scroll max-h-full relative"
      >
        <DialogBody>
          {link ? (
            <Link href={href} />
          ) : (
            <>
              <XMarkIcon
                strokeWidth={2}
                className="flex justify-end h-6 w-6 cursor-pointer absolute top-2 right-2 z-10"
                color="#000"
                onClick={handleOpen}
              />
              <OrderForm2 onClick={handleOpen} />
            </>
          )}
        </DialogBody>
      </Dialog>
    </>
  )
}
