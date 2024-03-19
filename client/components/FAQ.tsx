import { Typography } from '@material-tailwind/react'
import { AccordionUI } from './AccordionUI'

const FAQ = () => {
  return (
    <div className="flex py-20">
      <div className="flex flex-col mx-auto max-w-full px-3">
        <Typography className="flex mb-6 justify-center font-bold text-3xl">
          Часто задаваемые вопросы
        </Typography>
        <AccordionUI />
      </div>
      {/* <div className="w-1/2 mx-auto">
        <Image
          alt=""
          src={'/assets/it-ChooseUs/blog5eaaa5cb18719_nativemsg-faq.jpg'}
          width={30}
          height={39}
          layout="responsive"
        />
      </div> */}
    </div>
  )
}

export default FAQ
