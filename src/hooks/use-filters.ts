import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'

interface IPriceRangeProps {
  minPrice?: number
  maxPrice?: number
}

export interface IFilters {
  categoryId?: number
  colors: Set<number>
  sizes: Set<number>
  priceRange: IPriceRangeProps
}

interface IReturnProps extends IFilters {
  setPriceRange: (key: keyof IPriceRangeProps, value: number) => void
  setCategoryId: (value: number) => void
  setColorIds: (value: number) => void
  setSizeIds: (value: number) => void
}

export const useFilters = (): IReturnProps => {
  const searchParams = useSearchParams()
  const [colors, { toggle: toggleColor }] = useSet(
    new Set<number>(searchParams.get('colorIds')?.split(',').map(Number))
  )
  const [sizes, { toggle: toggleSize }] = useSet(
    new Set<number>(searchParams.get('sizeIds')?.split(',').map(Number))
  )

  const [categoryId, setCategoryId] = useState<number | undefined>(
    Number(searchParams.get('categoryId')) || undefined
  )
  const updateCategoryId = (value: number) => {
    setCategoryId(value)
  }

  const [priceRange, setPriceRange] = useState<IPriceRangeProps>({
    minPrice: Number(searchParams.get('minPrice')) || undefined,
    maxPrice: Number(searchParams.get('maxPrice')) || undefined
  })
  const updatePrice = (name: keyof IPriceRangeProps, value: number) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }))
  }

  return useMemo(
    () => ({
      priceRange,
      sizes,
      colors,
      categoryId,
      setPriceRange: updatePrice,
      setCategoryId: updateCategoryId,
      setColorIds: toggleColor,
      setSizeIds: toggleSize
    }),
    [priceRange, sizes, colors, categoryId, toggleColor, toggleSize]
  )
}
