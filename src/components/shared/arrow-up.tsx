'use client'
import { useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { m, useAnimation } from 'framer-motion'
import ArrowUpIcon from '@/public/icons/arrow-up.svg'
import { Button } from '@/components'

export const ArrowUp = () => {
  const { y } = useWindowScroll()
  const controls = useAnimation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    controls.start({ opacity: y > 500 ? 1 : 0 })
  }, [y, controls])

  return (
    <m.div animate={controls} initial={{ opacity: 0 }} className='fixed bottom-5 right-5'>
      <Button
        variant='link'
        size={'icon'}
        onClick={scrollToTop}
        className='group h-[53px] w-[58px] border border-border bg-white hover:border-dark-green hover:bg-dark-green'
      >
        <ArrowUpIcon className='group-hover:fill-white' />
      </Button>
    </m.div>
  )
}
