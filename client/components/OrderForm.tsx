import { Button, Typography } from '@material-tailwind/react'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { SERVICES } from './Services'

type FormInput = {
  name: string
  surname: string
  phone: string
  message: string
  email: string
  // No need for a separate 'services' field in the form data
}

const OrderForm = () => {
  const [selectedService, setSelectedService] = useState<string>('') // State for selected service

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>()

  const handleServiceClick = (title: string) => {
    setSelectedService(title === selectedService ? '' : title) // Toggle selection
  }

  const isValidName = (name: string) => {
    const preValid = name.toString()

    const nameRegex = /^(?![\s.]+$)[a-zA-Zа-яА-Я\s.]*$/
    return nameRegex.test(preValid)
  }

  const isValidNumber = (phone: string) => {
    const preValid = phone.toString()

    const phoneRegex = /^\s*(\+?375|80)(29|33|44|25)\d{7}\s*$/
    return phoneRegex.test(preValid)
  }

  async function onSubmit(formData: FormInput) {
    if (!selectedService) {
      toast.error('Пожалуйста, выберите услугу.')
      return
    }
    const Time = new Date()
    if (!isValidName(formData.name)) {
      toast.error('Пожалуйста, введите корректные данные в поле с ФИО.')

      return
    }
    if (!isValidNumber(formData.phone)) {
      toast.error(
        'Пожалуйста, введите корректный номер телефона (пример: +375291234567).'
      )
      return
    }

    try {
      await axios.post('/api/sendEmail', {
        name: formData.name,
        phone: formData.phone,
        surname: formData.surname,
        message: formData.message,
        email: formData.email,
        service: selectedService, // Include selectedService here
      })
      toast.success('Ваше сообщение отправлено успешно')
    } catch (error) {
      toast.error('Ошибка при отправке сообщения')
    }
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 lg:max-w-4xl overflow-y-auto max-h-max"
    >
      <div className=" grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-4 sm:max-w-full lg:grid-cols-3 xl:grid-cols-3 xl:max-w-lg">
        {SERVICES.map((item, index) => (
          <Button
            key={index}
            variant="outlined"
            id="Servives"
            type="button"
            role="button"
            className={`max-w-full ${
              item.title === selectedService ? 'bg-blue-200' : ''
            }`}
            onClick={() => handleServiceClick(item.title)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      {/* No need for a separate 'services' field in the form */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            Фамилия
          </Typography>
          <input
            role="textbox"
            type="text"
            id="Surname"
            required
            {...register('surname')}
            className={`!min-w-full border-b rounded-lg bg-inherit`}
          />
        </div>
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            Имя
          </Typography>
          <input
            role="textbox"
            type="text"
            id="Name"
            required
            {...register('name')}
            className={`!min-w-full border-b rounded-lg bg-inherit`}
          />
        </div>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Ваш телефон
        </Typography>
        <input
          type="tel"
          id="phone"
          role="textbox"
          required
          {...register('phone')}
          className={`!min-w-full border-b rounded-lg bg-inherit`}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Ваш Email
        </Typography>
        <input
          type="email"
          id="email"
          role="textbox"
          required
          {...register('email')}
          className={`!min-w-full border-b rounded-lg bg-inherit`}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Ваше сообщение
        </Typography>
        <textarea
          id="message"
          rows={5}
          role="textbox"
          required
          {...register('message')}
          className={`min-w-full border-b rounded-lg bg-inherit`}
        />
      </div>
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full"
        color="gray"
      >
        Отправить
      </Button>
    </form>
  )
}

export default OrderForm