import { cn } from '@/lib/utils'
import { Input } from '@/components'
import SearchIcon from '@/public/icons/header/search-small.svg'

interface HeaderSearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderSearch = ({ className, ...props }: HeaderSearchProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <Input type='search' placeholder='Search' className='w-full' />
      <SearchIcon className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2' />
    </div>
  )
}
