'use client'
import * as React from 'react'
import FavoritesIcon from '@/public/icons/header/heart.svg'
import { cn } from '@/lib/utils'

interface FavoritesProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean
  onFavoriteClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const FavoritesButton = React.forwardRef<HTMLButtonElement, FavoritesProps>(
  ({ isFavorite, onFavoriteClick, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onFavoriteClick}
        className={cn('flex items-center justify-center', className)}
        {...props}
      >
        <FavoritesIcon className={cn('', isFavorite ? 'fill-pink' : 'fill-none stroke-black')} />
      </button>
    )
  }
)

FavoritesButton.displayName = 'FavoritesButton'
