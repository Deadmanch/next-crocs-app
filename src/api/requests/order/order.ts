import { IOrderResponse } from '@/interfaces'
import { API, request } from '@/api'
import { ICreateOrderDto } from './dto/create-order.dto'

export const createOrder = async (dto: ICreateOrderDto): Promise<IOrderResponse> => {
  return request<IOrderResponse>({
    url: API.order.create,
    body: dto,
    method: 'POST',
    token: localStorage.getItem('token') || ''
  })
}

export const getOrders = async (limit: number, page: number): Promise<IOrderResponse[]> => {
  return request<IOrderResponse[]>({
    url: API.order.getOrderByTokenOrUserId,
    query: {
      limit,
      page
    },
    token: localStorage.getItem('token') || ''
  })
}
