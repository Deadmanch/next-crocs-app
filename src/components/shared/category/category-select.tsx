import { SelectGroup } from '@radix-ui/react-select'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components'
import { cn } from '@/lib/utils'
import { ICategory } from '@/interfaces'

interface CategorySelectProps {
  categories: ICategory[]
  className?: string
  value?: string
  onChange?: (e: string) => void
}

export const CategorySelect = ({
  categories,
  className,
  onChange,
  value,
  ...props
}: CategorySelectProps) => {
  return (
    <Select value={value} onValueChange={onChange} {...props}>
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
