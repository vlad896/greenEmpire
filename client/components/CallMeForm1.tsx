// 'use client'

// import axios from 'axios'
// import Link from 'next/link'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-hot-toast' // updated cod

// // import 'react-phone-numsber-input/style.css'

// type FormInput = {
//   name: string
//   phone: string
//   checkbox: boolean
// }

// export default function CallMeForm1() {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//     reset,
//   } = useForm<FormInput>()

//   const isValidName = (name: string) => {
//     const preValid = name.toString()

//     const nameRegex = /^(?![\s.]+$)[a-zA-Zа-яА-Я\s.]*$/
//     return nameRegex.test(preValid)
//   }
//   const isValidNumber = (phone: string) => {
//     const preValid = phone.toString()

//     const phoneRegex = /^\s*(\+?375|80)(29|33|44|25)\d{7}\s*$/
//     return phoneRegex.test(preValid)
//   }

//   async function onSubmit(formData: FormInput) {
//     const Time = new Date()
//     if (!isValidName(formData.name)) {
//       toast.error('Пожалуйста, введите корректные данные в поле с ФИО.')

//       return
//     }
//     if (!isValidNumber(formData.phone)) {
//       toast.error(
//         'Пожалуйста, введите корректный номер телефона (пример: +375291234567).'
//       )
//       return
//     }
//     /* await axios.post('http://localhost:8080/api/user', {
//       name: formData.name,
//       phone: formData.phone,
//       date: Time.toISOString(),
//     }) */
//     toast.success('Your email message has been sent successfully')
//     try {
//       await axios.post('/api/sendEmail', {
//         name: formData.name,
//         phone: formData.phone,
//       })
//       //alert('Email sent successfully')
//     } catch (error) {
//       //alert('Failed to send email')
//     }
//     reset()
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex min-w-[340px] shrink-0 grow basis-1/3 flex-col"
//     >
//       <h2 className="mb-10 text-2xl font-semibold text-white">
//         Узнать стоимость мебели
//       </h2>
//       <p className="mb-10 break-words">
//         Оставьте свои контактные данные, наш менеджер свяжется с вами в течении
//         10 минут
//       </p>
//       <div className="flex flex-col">
//         <input
//           role="textbox"
//           type="text"
//           id="Name"
//           placeholder="ФИО"
//           required
//           {...register('name')}
//           className={`mb-5 w-full placeholder:text-[#fff] border-b bg-inherit py-3 text-base font-bold`}
//         />
//         <input
//           type="tel"
//           id="phone"
//           placeholder="ТЕЛЕФОН"
//           role="textbox"
//           required
//           {...register('phone')}
//           className="mb-10 w-full placeholder:text-[#fff] border-b bg-inherit py-3 text-base font-bold "
//         />
//         <div className="flex flex-row gap-2 leading-8 items-start">
//           <div className="relative flex items-center justify-center gap-2">
//             {/* <input
//               type="checkbox"
//               id="checkbox1"
//               role="checkbox"
//               required
//               {...register('checkbox')}
//               className={`h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:bg-[url('../public/assets/icons/checkbox.svg')] checked:bg-[length:20px] checked:bg-center focus:outline-none`}
//             /> */}
//             <label htmlFor="checkbox1" className="w-full">
//               Даю согласие на обработку{' '}
//             </label>
//           </div>
//           <Link
//             href={'#'}
//             className="font-normal flex items-start text-white underline md:underline-offset-4"
//           >
//             <span>Персональных данных</span>
//           </Link>
//         </div>
//         <button
//           disabled={isSubmitting}
//           type="submit"
//           className="mt-10 self-start text-sm bg-white px-10 py-3 text-center text-black hover:no-underline sm:block md:px-12 md:text-base md:py-4"
//         >
//           Оставить заявку
//         </button>
//       </div>
//     </form>
//   )
// }
