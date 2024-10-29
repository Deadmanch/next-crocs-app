'use client'
import {
  Button,
  RangeSlider,
  Title,
  SizeItem,
  ColorItem,
  Input,
  CategorySelect,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent
} from '@/components'
import { useFilters, useQueryFilters } from '@/hooks'
import { ICategory, IFilterResponse } from '@/interfaces'
import FilterIcon from '@/public/icons/filter.svg'

interface FilterDrawerProps {
  filtersData: IFilterResponse
  isSelect?: boolean
  categories?: ICategory[]
}

export const FilterDrawer = ({ filtersData, isSelect = false, categories }: FilterDrawerProps) => {
  const { minPrice, maxPrice, sizes, colors } = filtersData
  const filters = useFilters()
  useQueryFilters(filters)

  const updatePrices = (prices: number[]) => {
    filters.setPriceRange('minPrice', prices[0])
    filters.setPriceRange('maxPrice', prices[1])
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='small' className='group gap-4'>
          <span className='hidden 480:block'>Filter</span>
          <FilterIcon className='group-hover:fill-white' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <div className='flex flex-col gap-5 text-center'>
          {isSelect && (
            <div className='flex flex-col gap-4'>
              <Title tag='h3' className='font-[20px]'>
                Category
              </Title>
              {categories && <CategorySelect categories={categories} />}
            </div>
          )}
          <div className='flex flex-col gap-4'>
            <Title tag='h3' className='font-[20px]'>
              Price
            </Title>
            <div className='flex items-center justify-center gap-5'>
              <Input
                className='w-[150px]'
                type='number'
                placeholder={minPrice.toString()}
                min={minPrice}
                max={maxPrice}
                value={String(filters.priceRange.minPrice)}
                onChange={(e) => filters.setPriceRange('minPrice', Number(e.target.value))}
              />
              <Input
                className='w-[150px]'
                type='number'
                placeholder={maxPrice.toString()}
                min={minPrice}
                max={maxPrice}
                value={String(filters.priceRange.maxPrice)}
                onChange={(e) => filters.setPriceRange('maxPrice', Number(e.target.value))}
              />
            </div>
            <RangeSlider
              min={minPrice}
              max={maxPrice}
              step={5}
              value={[
                filters.priceRange.minPrice || minPrice,
                filters.priceRange.maxPrice || maxPrice
              ]}
              onValueChange={updatePrices}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <Title tag='h3' className='font-[20px]'>
              Size
            </Title>
            <div className='grid grid-cols-4 gap-3'>
              {sizes.map((size) => (
                <SizeItem
                  key={size.title}
                  title={size.title}
                  inStock={size.inStock}
                  active={filters.sizes.has(size.id)}
                  onClick={() => filters.setSizeIds(size.id)}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Title tag='h3' className='font-[20px]'>
              Colors
            </Title>
            <div className='grid grid-cols-4 gap-3'>
              {colors.map((color) => (
                <ColorItem
                  key={color.title}
                  title={color.title}
                  inStock={color.inStock}
                  image={color.images[0]}
                  active={filters.colors.has(color.id)}
                  onClick={() => filters.setColorIds(color.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
