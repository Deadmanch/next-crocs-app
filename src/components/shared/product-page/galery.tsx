'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Thumbs, FreeMode } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { Swiper as SwiperType } from 'swiper'
import { cn } from '@/lib/utils'

interface GaleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
}

export const Galery = ({ images, className }: GaleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <Swiper
        loop
        spaceBetween={10}
        grabCursor
        thumbs={{ swiper: thumbsSwiper }}
        keyboard={{ enabled: true }}
        modules={[FreeMode, Thumbs, Keyboard]}
        className='GallerySwiper'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt='Image Slide'
              width={495}
              height={760}
              className='size-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={4}
        slidesPerView={3}
        watchSlidesProgress
        grabCursor
        keyboard={{ enabled: true }}
        modules={[FreeMode, Keyboard, Thumbs]}
        className='GallerySwiperThumbs'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt='Image Slide'
              width={120}
              height={120}
              className={cn('size-full object-cover')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
