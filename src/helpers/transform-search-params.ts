import { DEFAULT_MAX_PRICE, DEFAULT_MIN_PRICE, DEFAULT_PAGE } from '@/constants'

export interface ISearchParams {
  categoryId?: string
  minPrice?: string
  maxPrice?: string
  colorIds?: string
  sizeIds?: string
  page?: string
}

export const transformSearchParams = (params: ISearchParams) => {
  const minPrice = Number(params.minPrice) || DEFAULT_MIN_PRICE
  const maxPrice = Number(params.maxPrice) || DEFAULT_MAX_PRICE

  const categoryId = Number(params.categoryId) || undefined

  const colorIds = params.colorIds?.split(',').map(Number) || []
  const sizeIds = params.sizeIds?.split(',').map(Number) || []
  const page = Number(params.page) || DEFAULT_PAGE

  return { minPrice, maxPrice, categoryId, colorIds, sizeIds, page }
}
