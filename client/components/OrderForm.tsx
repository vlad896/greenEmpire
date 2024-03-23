import { Button, Input, Textarea, Typography } from '@material-tailwind/react'
import { SERVICES } from './Services'

const OrderForm = () => {
  return (
    <form action="#" className="flex flex-col gap-4 lg:max-w-4xl">
      <div className="  grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-4 sm:max-w-full lg:grid-cols-3 xl:grid-cols-3 xl:max-w-lg">
        {SERVICES.map((items, index) => (
          <Button key={index} variant="outlined" className="max-w-full">
            {items.title}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            Фамилия
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="First Name"
            name="first-name"
            className="focus:border-t-gray-900"
            containerProps={{
              className: 'min-w-full',
            }}
            labelProps={{
              className: 'hidden',
            }}
            crossOrigin={undefined}
          />
        </div>
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            Имя
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="Last Name"
            name="last-name"
            className="focus:border-t-gray-900"
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{}}
            crossOrigin={undefined}
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
        <Input
          color="gray"
          size="lg"
          placeholder="name@email.com"
          name="email"
          className="border focus:border-t-gray-900"
          containerProps={{
            className: '!min-w-full',
          }}
          labelProps={{}}
          crossOrigin={undefined}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Ваш Email
        </Typography>
        <Input
          color="gray"
          size="lg"
          placeholder="name@email.com"
          name="email"
          className="focus:border-t-gray-900"
          containerProps={{
            className: '!min-w-full',
          }}
          labelProps={{}}
          crossOrigin={undefined}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Ваше сообщение
        </Typography>
        <Textarea
          rows={6}
          color="gray"
          placeholder="Сообщение"
          name="message"
          className=" border"
          containerProps={{
            className: '!min-w-full',
          }}
          labelProps={{}}
        />
      </div>
      <Button className="w-full" color="gray">
        Отправить
      </Button>
    </form>
  )
}

export default OrderForm
