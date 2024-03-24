import { XMarkIcon } from '@heroicons/react/20/solid'
import { Button, Dialog, DialogBody } from '@material-tailwind/react'
import React from 'react'
import OrderForm2 from './OrderForm2'

export function DialogButton() {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(!open)

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="filled"
        style={{ backgroundColor: '#005BFF' }}
        className="flex w-52 justify-center"
      >
        Learn More
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
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className=" overflow-y-scroll max-h-full relative"
      >
        <DialogBody>
          <XMarkIcon
            strokeWidth={2}
            className="flex justify-end h-6 w-6 cursor-pointer absolute top-2 right-2 z-10"
            color="#000"
            onClick={handleOpen}
          />
          {/* <OrderForm /> */}
          <OrderForm2 />
        </DialogBody>
      </Dialog>
    </>
  )
}
