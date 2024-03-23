import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from '@material-tailwind/react'
import React from 'react'
import OrderForm from './OrderForm'

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
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <OrderForm />
        </DialogBody>
      </Dialog>
    </>
  )
}
