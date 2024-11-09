'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard, FreeMode } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

interface MobileGaleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
}

export const MobileGalery = ({ images, className }: MobileGaleryProps) => {
  return (
    <div className={cn('', className)}>
      <Swiper
        grabCursor
        loop
        keyboard={{ enabled: true }}
        className='sample-slider'
        pagination={{
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          clickable: true
        }}
        modules={[FreeMode, Keyboard, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt='Image Slide'
              width={440}
              height={645}
              className='size-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
