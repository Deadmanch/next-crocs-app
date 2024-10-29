import { SelectHTMLAttributes } from 'react'
import { SelectGroup } from '@radix-ui/react-select'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components'
import { cn } from '@/lib/utils'
import { ICategory } from '@/interfaces'

interface CategorySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  categories: ICategory[]
}

export const CategorySelect = ({ categories, className }: CategorySelectProps) => {
  return (
    <Select>
      <SelectTrigger className={cn('w-[172px]', className)}>
        <SelectValue placeholder='Select category' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
