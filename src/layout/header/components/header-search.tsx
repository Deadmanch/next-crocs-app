'use client'
import { useState, useRef } from 'react'
import { useClickAway, useDebounce } from 'react-use'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Input, Text } from '@/components'
import SearchIcon from '@/public/icons/header/search-small.svg'
import { IProduct } from '@/interfaces'
import { searchProductsByTitle } from '@/api'

interface HeaderSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
}

export const HeaderSearch = ({ className, onClose, ...props }: HeaderSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const ref = useRef<HTMLInputElement>(null)
  useClickAway(ref, () => setFocused(false))

  useDebounce(
    async () => {
      try {
        const res = await searchProductsByTitle(searchQuery)
        setProducts(res)
      } catch (error) {
        console.log('@HEADER_SEARCH_ERROR', error)
      }
    },
    250,
    [searchQuery]
  )
  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setProducts([])
    if (onClose) {
      onClose() // Закрыть меню после клика, если передана функция onClose
    }
  }
  return (
    <>
      {focused && <div className='fixed inset-0 z-30 bg-gray-300/50' />}
      <div className={cn('relative z-30 h-11 justify-between', className)} {...props} ref={ref}>
        <Input
          onFocus={() => setFocused(true)}
          type='text'
          placeholder='Search'
          className='w-full'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2' />
        {products.length > 0 && (
          <div
            className={cn(
              'invisible absolute left-0 top-14 w-full border border-border bg-white opacity-0 transition-all duration-200',
              focused && 'visible top-12 opacity-100'
            )}
          >
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                href={`/category/${product.category.slug}/${product.slug}`}
                className='flex items-center gap-3 p-4 hover:bg-gray-200 hover:shadow-card'
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={67}
                  height={44}
                  className='h-[44px] shrink-0 border border-border object-cover object-center'
                />
                <Text tag='span'>{product.title}</Text>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
