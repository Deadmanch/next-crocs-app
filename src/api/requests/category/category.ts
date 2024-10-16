import { API, request } from '@/api'
import { ICategory, ICategoryResponse } from '@/interfaces'

export const getCategoryBySlug = async (slug: string): Promise<ICategory> => {
  return request<ICategory>({
    url: API.category.getBySlug + `/${slug}`
  })
}

export const getAllCategories = async (): Promise<ICategoryResponse> => {
  return request<ICategoryResponse>({
    url: API.category.getAll,
    query: {
      limit: '10',
      page: '1'
    }
  })
}

export const getCategoryById = async (id: number): Promise<ICategory> => {
  return request<ICategory>({
    url: API.category.getById + `/${id}`
  })
}
