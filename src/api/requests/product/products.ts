import { IProduct, IProductResponse } from '@/interfaces'
import { request, API } from '@/api'

export const getAllProducts = async (
  limit: string = '10',
  page: string = '1'
): Promise<IProductResponse> => {
  return request<IProductResponse>({
    url: API.product.getAll,
    query: {
      limit,
      page
    }
  })
}

export const getProductBySlug = async (slug: string): Promise<IProduct> => {
  return request<IProduct>({
    url: API.product.getBySlug + `/${slug}`
  })
}

export const getProductById = async (id: number): Promise<IProduct> => {
  return request<IProduct>({
    url: API.product.getById + `/${id}`
  })
}

export const getProductByTitle = async (title: string): Promise<IProduct> => {
  return request<IProduct>({
    url: API.product.getByTitle + `/${title}`
  })
}

export const getProductByCategory = async (
  id: number,
  limit: string = '10',
  page: string = '1'
): Promise<IProductResponse> => {
  return request<IProductResponse>({
    url: API.product.getByCategory + `/${id}`,
    query: {
      limit,
      page
    }
  })
}
