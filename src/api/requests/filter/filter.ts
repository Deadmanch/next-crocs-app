import { API, request } from '@/api'
import { IProductResponse } from '@/interfaces'
import { transformDtoToQuery } from '@/helpers'
import { IGetFiltersProductDto } from './get-filters-product.dto'

export const getStartFilter = async (): Promise<IProductResponse> => {
  return request<IProductResponse>({
    url: API.product.filter.getStartFilter
  })
}

export const getFilter = async (dto: IGetFiltersProductDto): Promise<IProductResponse> => {
  const query = transformDtoToQuery(dto)
  return request<IProductResponse>({
    url: API.product.filter.getFilter,
    query
  })
}
