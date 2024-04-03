import { Typography } from '@material-tailwind/react'
import { AccordionUI } from './AccordionUI'

const FAQ = () => {
  return (
    <div className="flex py-20">
      <div className="flex flex-col mx-auto max-w-full px-6">
        <Typography className="flex mb-6 justify-center font-bold text-3xl">
          Часто задаваемые вопросы
        </Typography>
        <AccordionUI />
      </div>
    </div>
  )
}

export default FAQ
