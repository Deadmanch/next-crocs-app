import { Counter } from '@/components'
import { cn } from '@/lib/utils'
import FavoriteIcon from '@/public/icons/header/heart.svg'

interface HeaderFavoritesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderFavorites = ({ className, ...props }: HeaderFavoritesProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <FavoriteIcon />
      <Counter className='absolute left-[calc(100%-15px)] top-[-5px]' value={2} />
    </div>
  )
}
