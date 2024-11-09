import { API, request } from '@/api'
import { ICartResponse } from '@/interfaces'
import { getTokenUserStorage } from '@/helpers'
import { IAddToCartDto } from './dto/add-to-cart.dto'

export const createCart = async (): Promise<ICartResponse> => {
  return request({
    url: API.cart.create,
    method: 'POST'
  })
}

export const getCart = async (): Promise<ICartResponse> => {
  return request({
    url: API.cart.getCart,
    method: 'GET',
    token: getTokenUserStorage()
  })
}

export const addToCart = async (dto: IAddToCartDto): Promise<ICartResponse> => {
  return request({
    url: API.cart.addItem,
    body: dto,
    method: 'POST',
    token: getTokenUserStorage()
  })
}

export const updateItemQuantity = async (
  quantity: number,
  cartItemId: number
): Promise<ICartResponse> => {
  return request({
    url: API.cart.updateItemQuantity + `/${cartItemId}`,
    body: { quantity },
    method: 'PATCH',
    token: getTokenUserStorage()
  })
}

export const removeItem = async (cartItemId: number): Promise<ICartResponse> => {
  return request({
    url: API.cart.removeItem + `/${cartItemId}`,
    method: 'DELETE',
    token: getTokenUserStorage()
  })
}
