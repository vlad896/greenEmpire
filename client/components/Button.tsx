'use client'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { isMobile } from 'react-device-detect'
const Button = forwardRef<HTMLButtonElement>(({}, ref) => {
  const handleClick = () => {
    if (!isMobile) {
      const link = document.createElement('a')
      link.href = '#contacts'
      link.click()
    } else {
      const telLink = document.createElement('a')
      telLink.href = 'tel:+375447073636'
      telLink.click()
    }
  }
  return (
    <button
      ref={ref}
      onClick={handleClick}
      className="mt-10 self-center text-sm bg-white px-10 py-3 text-center text-black hover:no-underline sm:block md:px-12 md:text-base md:py-4"
    >
      Узнать стоимость
    </button>
  )
})

export const MButton = motion(Button)
