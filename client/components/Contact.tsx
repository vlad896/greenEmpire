import { Button, Input, Textarea, Typography } from '@material-tailwind/react'

export function Contact() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="/assets/it-ChooseUs/map.png"
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
          />
          <form action="#" className="flex flex-col gap-4 lg:max-w-4xl">
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Select Options for Business Engagement
            </Typography>
            <div className="  grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-4 sm:max-w-full lg:grid-cols-3 xl:grid-cols-3 xl:max-w-lg">
              <Button variant="outlined" className="max-w-full">
                General inquiry
              </Button>
              <Button variant="outlined" className="max-w-full">
                General inquiry
              </Button>
              <Button variant="outlined" className="max-w-full">
                General inquiry
              </Button>
              <Button variant="outlined" className="max-w-full">
                General inquiry
              </Button>
              <Button variant="outlined" className="max-w-full">
                General inquiry
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
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
                  Last Name
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
                Your Email
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
                Your Email
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
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className=" border"
                containerProps={{
                  className: '!min-w-full',
                }}
                labelProps={{}}
              />
            </div>
            <Button className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
