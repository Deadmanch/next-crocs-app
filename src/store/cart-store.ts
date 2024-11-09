import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { ICartItem } from '@/interfaces'
import { IAddToCartDto } from '@/api/requests/cart/dto/add-to-cart.dto'
import { addToCart, createCart, getCart, updateItemQuantity } from '@/api/requests'
export interface ICartState {
  loading: boolean
  error: boolean
  cartItems: ICartItem[]
  totalAmount: number
  createCart: () => Promise<void>
  addToCart: (dto: IAddToCartDto) => Promise<void>
  updateItemQuantity: (quantity: number, productId: number) => Promise<void>
  removeItem: (productId: number) => Promise<void>
  fetchCart: () => Promise<void>
}

export const useCartStore = create<ICartState>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        totalAmount: 0,
        loading: true,
        error: false,
        fetchCart: async () => {
          try {
            set({ loading: true, error: false })
            const res = await getCart()
            set({ cartItems: res.cartItems, totalAmount: res.totalAmount })
          } catch (error) {
            console.error(error)
            set({ error: true })
          } finally {
            set({ loading: false })
          }
        },
        createCart: async () => {
          try {
            set({ loading: true, error: false })
            const res = await createCart()
            set({ cartItems: res.cartItems, totalAmount: res.totalAmount })
          } catch (error) {
            console.error(error)
            set({ error: true })
          } finally {
            set({ loading: false })
          }
        },
        addToCart: async (dto: IAddToCartDto) => {
          try {
            set({ loading: true, error: false })
            const res = await addToCart(dto)
            set({ cartItems: res.cartItems, totalAmount: res.totalAmount })
          } catch (error) {
            console.error(error)
            set({ error: true })
          } finally {
            set({ loading: false })
          }
        },
        updateItemQuantity: async (quantity: number, cartItemId: number) => {
          try {
            set({ loading: true, error: false })
            const res = await updateItemQuantity(quantity, cartItemId)
            set({ cartItems: res.cartItems, totalAmount: res.totalAmount })
          } catch (error) {
            console.error(error)
            set({ error: true })
          } finally {
            set({ loading: false })
          }
        },
        removeItem: async (cartItemId: number) => {
          try {
            set({ loading: true, error: false })
            const res = await updateItemQuantity(0, cartItemId)
            set({ cartItems: res.cartItems, totalAmount: res.totalAmount })
          } catch (error) {
            console.error(error)
            set({ error: true })
          } finally {
            set({ loading: false })
          }
        }
      }),
      {
        name: 'cart-storage'
      }
    )
  )
)
