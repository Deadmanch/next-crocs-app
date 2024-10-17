import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components'

interface ProductImageProps extends HTMLAttributes<HTMLDivElement> {
  image: string
  alt: string
}

export const ProductImage = ({ image, alt, className, ...props }: ProductImageProps) => {
  return (
    <AspectRatio ratio={84 / 9} className={cn('', className)} {...props}>
      <Image src={image} layout='fill' alt={alt} className='w-full' />
    </AspectRatio>
  )
}
