'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ProductBadges, Title, Text, FavoritesButton, Separator } from '@/components'
import { cn } from '@/lib/utils'
import { PriceDataToFormatPrice } from '@/helpers/price-data-to-format-price'
import CartIcon from '@/public/icons/cart-add.svg'
import { IProduct } from '@/interfaces'
import { useFavoritesStore } from '@/store'

interface ProductCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  categorySlug?: string
  product: IProduct
}

export const ProductCard = ({ categorySlug, product, className, ...props }: ProductCardProps) => {
  const { title, images, slug, originalPrice, discountedPrice, tags } = product

  const isFavorite = useFavoritesStore((state) => state.isFavorite(product.id))
  const addFavorite = useFavoritesStore((state) => state.addFavorite)
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (isFavorite) {
      removeFavorite(product.id)
    } else {
      addFavorite(product)
    }
  }

  return (
    <Link
      href={`/category/${categorySlug}/${slug}`}
      className={cn(
        'relative flex w-full flex-col border border-border bg-background-light-gray',
        className
      )}
      {...props}
    >
      <div className='relative w-full overflow-hidden' style={{ aspectRatio: '16/9' }}>
        <Image
          src={images[0]}
          alt={title}
          fill
          quality={100}
          className='object-cover object-center'
        />
      </div>
      {tags && <ProductBadges className='absolute left-3 top-3' tags={tags} />}
      <FavoritesButton
        className='absolute right-3 top-3'
        isFavorite={isFavorite}
        onFavoriteClick={handleFavoriteClick}
      />
      <Separator className='mb-2' />
      <div className='flex grow flex-row justify-between gap-1 p-3'>
        <div className='flex grow flex-col gap-2'>
          <Title tag='h3' className='mb-auto'>
            {title}
          </Title>
          <div className='flex items-center gap-2'>
            {discountedPrice ? (
              <>
                <Text className='text-black'>{PriceDataToFormatPrice(discountedPrice)}</Text>
                <Text className='text-foreground-gray line-through'>
                  {PriceDataToFormatPrice(originalPrice)}
                </Text>
              </>
            ) : (
              <Text className='text-black'>{PriceDataToFormatPrice(originalPrice)}</Text>
            )}
          </div>
        </div>
        <button>
          <CartIcon />
        </button>
      </div>
    </Link>
  )
}
