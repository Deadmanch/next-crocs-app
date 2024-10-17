'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ProductBadges,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Text,
  FavoritesButton,
  Separator
} from '@/components'
import { cn } from '@/lib/utils'
import { CARD_DATA } from '@/mock/card-data'
import { PriceDataToFormatPrice } from '@/helpers/price-data-to-format-price'

interface ProductCardProps extends React.HTMLAttributes<HTMLAnchorElement> {}

export const ProductCard = ({ className, ...props }: ProductCardProps) => {
  const { title, images, originalPrice, discountedPrice, tags } = CARD_DATA
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link href='/' className={cn('', className)} {...props}>
      <Card className='relative flex min-h-[200px] w-[392px] flex-col'>
        <CardHeader>
          <div className='flex-200 overflow-hidden'>
            <div className='block size-full p-3'>
              <Image
                src={images[0]}
                alt={title}
                width={392}
                height={300}
                className='size-full object-cover'
              />
            </div>
          </div>
          <ProductBadges className='absolute left-2 top-2' tags={tags} />
          <FavoritesButton
            className='absolute right-3 top-3'
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
        </CardHeader>
        <Separator />
        <CardContent className='flex flex-col gap-2 p-3'>
          <CardTitle className=''>{title}</CardTitle>
          <div className='flex items-center gap-2'>
            <Text tag='span'>{PriceDataToFormatPrice(discountedPrice)}</Text>
            <Text tag='span' className='text-muted-foreground line-through'>
              {PriceDataToFormatPrice(originalPrice)}
            </Text>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
