import { SelectHTMLAttributes } from 'react'
import { SelectGroup } from '@radix-ui/react-select'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components'
import { cn } from '@/lib/utils'

interface SortSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const sortOptions = [
  {
    value: 'price-asc',
    label: 'Price: Low to Hight'
  },
  {
    value: 'price-desc',
    label: 'Price: Hight to Low'
  },
  {
    value: 'recommended',
    label: 'Recommended'
  },
  {
    value: 'bestsellers',
    label: 'Bestsellers'
  },
  {
    value: 'newest',
    label: 'Newest'
  }
]

export const SortSelect = ({ className }: SortSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={cn('w-[172px]', className)}>
        <SelectValue placeholder='Sort by' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
