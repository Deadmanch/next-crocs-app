'use client'
import { Counter } from '@/components'
import { cn } from '@/lib/utils'
import FavoriteIcon from '@/public/icons/header/heart.svg'
import { useFavoritesStore } from '@/store'

interface HeaderFavoritesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderFavorites = ({ className, ...props }: HeaderFavoritesProps) => {
  const { favorites } = useFavoritesStore((state) => state)
  const counter = favorites.length
  return (
    <div className={cn('relative', className)} {...props}>
      <FavoriteIcon />
      <Counter className='absolute left-[calc(100%-15px)] top-[-5px]' value={counter} />
    </div>
  )
}
