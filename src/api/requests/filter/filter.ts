import { API, request } from '@/api'
import { IFilterResponse, IProductResponse } from '@/interfaces'
import { IGetFiltersProductDto } from './get-filters-product.dto'

export const getStartFilter = async (): Promise<IFilterResponse> => {
  return request<IFilterResponse>({
    url: API.product.filter.getStartFilter
  })
}

export const getStartFilterByCategory = async (id: number): Promise<IFilterResponse> => {
  return request<IFilterResponse>({
    url: API.product.filter.getStartFilter + `/${id}`
  })
}

export const getFilter = async (dto: IGetFiltersProductDto): Promise<IProductResponse> => {
  console.log('DTO', dto)
  return request<IProductResponse>({
    url: API.product.filter.getFilter,
    query: dto
  })
}
