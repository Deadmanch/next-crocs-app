import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IProduct } from '@/interfaces'

interface FavoritesState {
  favorites: IProduct[]
  addFavorite: (product: IProduct) => void
  removeFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (product) => {
        set((state) => ({
          favorites: [...state.favorites, product]
        }))
      },
      removeFavorite: (productId) => {
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id !== productId)
        }))
      },
      isFavorite: (productId) => {
        return get().favorites.some((product) => product.id === productId)
      }
    }),
    {
      name: 'favorites-storage'
    }
  )
)
