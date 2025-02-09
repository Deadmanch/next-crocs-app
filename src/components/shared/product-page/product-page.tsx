'use client'

import { HTMLAttributes, useState } from 'react'
import { IProduct } from '@/interfaces'
import {
  Title,
  Text,
  Galery,
  ColorItem,
  SizeItem,
  CustomBreadcrumbs,
  CountButton,
  Container,
  Button,
  Separator,
  MobileGalery,
  ProductInfo
} from '@/components'
import { cn } from '@/lib/utils'
import { PriceDataToFormatPrice } from '@/helpers'
import { useCartStore } from '@/store'

interface ProductPageProps extends HTMLAttributes<HTMLDivElement> {
  product: IProduct
}

export const ProductClientPage = ({ product, className, ...props }: ProductPageProps) => {
  const { title, originalPrice, discountedPrice, images, colors, sizes } = product
  const { addToCart } = useCartStore((state) => state)

  const [selectedColor, setSelectedColor] = useState<number>()
  const [selectedSize, setSelectedSize] = useState<number>()
  const [quantity, setQuantity] = useState(1)

  const handleColorClick = (id: number) => {
    setSelectedColor(id)
  }

  const handleSizeClick = (id: number) => {
    setSelectedSize(id)
  }
  const onClickCountButton = (id: number, type: 'plus' | 'minus', quantity: number) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      try {
        addToCart({
          productId: product.id,
          quantity,
          colorId: selectedColor,
          sizeId: selectedSize
        })
        console.log('Product added to cart')
        setSelectedColor(undefined)
        setSelectedSize(undefined)
        setQuantity(1)
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please select a color and size')
    }
  }
  return (
    <Container className='max-w-screen-1216'>
      <section className={cn('px-4 py-10 1216:px-0', className)} {...props}>
        <CustomBreadcrumbs className='mb-10' />
        <div className='flex flex-col gap-5 768:flex-row'>
          <Galery className='hidden w-1/2 768:flex' images={images} />
          <div className='flex flex-col gap-4 768:w-1/2 1216:gap-10'>
            <Title>{title}</Title>
            <MobileGalery className='768:hidden' images={images} />
            <div className='flex flex-col gap-4'>
              <Text className='font-exo text-[20px] font-bold'>Color</Text>
              <div className='flex flex-wrap gap-3'>
                {colors.map((color) => (
                  <ColorItem
                    key={color.id}
                    image={color.images[0]}
                    title={color.title}
                    inStock={color.inStock}
                    active={color.id === selectedColor}
                    onClick={() => handleColorClick(color.id)}
                  />
                ))}
              </div>
            </div>
            <Separator className='bg-gray-300' />
            <div className='flex flex-col gap-4'>
              <Text className='font-exo text-[20px] font-bold'>Size</Text>
              <div className='flex flex-wrap gap-3'>
                {sizes.map((size) => (
                  <SizeItem
                    key={size.id}
                    title={size.title}
                    inStock={size.inStock}
                    active={size.id === selectedSize}
                    onClick={() => handleSizeClick(size.id)}
                  />
                ))}
              </div>
            </div>
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
            <div className='flex gap-3'>
              <CountButton
                onClick={(type) => onClickCountButton(product.id, type, quantity)}
                value={quantity}
              />
              <Button
                onClick={handleAddToCart}
                size='small'
                className='h-[48px] w-1/2 480:w-[186px] 768:w-1/2 960:w-[186px]'
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
        <ProductInfo className='mt-10' />
      </section>
    </Container>
  )
}
