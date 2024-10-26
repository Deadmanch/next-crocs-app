'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import '@/styles/globals.css'
import Image from 'next/image'
import { Pagination, Keyboard, FreeMode, Autoplay } from 'swiper/modules'
import { Container, Title } from '@/components'

import { cn } from '@/lib/utils'
const mockData = [
  {
    id: 1,
    src: '/images/collections/disney.png'
  },
  {
    id: 2,
    src: '/images/collections/hello-kitty.png'
  },
  {
    id: 3,
    src: '/images/collections/marvel.png'
  },
  {
    id: 4,
    src: '/images/collections/star-wars.png'
  },
  {
    id: 5,
    src: '/images/collections/shrek.png'
  },
  {
    id: 6,
    src: '/images/collections/sponge-bob.png'
  },
  {
    id: 7,
    src: '/images/collections/disney.png'
  },
  {
    id: 8,
    src: '/images/collections/marvel.png'
  }
]
interface SwiperCollectionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const SwiperCollection = ({ className, ...props }: SwiperCollectionProps) => {
  return (
    <section className={cn('px-5 pb-10 768:pb-20 1216:px-0', className)} {...props}>
      <Container className='max-w-screen-1216'>
        <Title className='mb-10 text-center' tag='h2'>
          Popular <span className='text-foreground-pink'>Collections</span>
        </Title>
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            960: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1216: {
              slidesPerView: 6,
              spaceBetween: 20
            }
          }}
          grabCursor
          className='sample-slider'
          loop={true}
          freeMode={true}
          pagination={{
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            clickable: true
          }}
          autoplay={{ delay: 3000 }}
          keyboard={{ enabled: true }}
          modules={[Pagination, Keyboard, FreeMode, Autoplay]}
        >
          {mockData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex gap-5'>
                <Image
                  src={item.src}
                  alt={`Slide - ${item.id}`}
                  width={229}
                  height={210}
                  priority
                  className='w-full border border-border'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}
