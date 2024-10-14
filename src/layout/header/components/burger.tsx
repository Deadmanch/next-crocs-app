'use client'
import { HTMLAttributes } from 'react'

import { m } from 'framer-motion'

import { cn } from '@/lib/utils'

interface BurgerProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
  onClick: () => void
}

export const Burger = ({
  className,
  isOpen,
  onClick,
  ...props
}: BurgerProps) => {
  return (
    <button
      className={cn(
        'flex h-[40px] w-[40px] flex-col items-end justify-center gap-2',
        className
      )}
      onClick={onClick}
      {...props}
    >
      <m.div
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 14 : 0 }}
        transition={{
          duration: 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 10
        }}
        className='h-[4px] w-[40px] bg-black'
      ></m.div>
      <m.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className='h-[4px] w-[40px] bg-black'
      ></m.div>
      <m.div
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
        transition={{
          duration: 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 10
        }}
        className='h-[4px] w-[40px] bg-black'
      ></m.div>
    </button>
  )
}
