/* eslint-disable import/no-named-as-default-member */
import { useEffect, useRef } from 'react'
import qs from 'qs'
import { useRouter, useSearchParams } from 'next/navigation'
import { IFilters } from '@/hooks'
import { DEFAULT_PAGE } from '@/constants'

type QueryParams = {
  categoryId?: number
  colorIds: number[]
  sizeIds: number[]
  minPrice?: number
  maxPrice?: number
  page?: number
}

export const useQueryFilters = (filters: IFilters) => {
  const isMounted = useRef(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (isMounted.current) {
      const currentPage = searchParams.get('page') || DEFAULT_PAGE

      const params: QueryParams = {
        ...filters.priceRange,
        categoryId: filters.categoryId,
        colorIds: Array.from(filters.colors),
        sizeIds: Array.from(filters.sizes)
      }

      if (Number(currentPage) !== 1) {
        params.page = Number(currentPage)
      }

      const queryString = qs.stringify(params, { arrayFormat: 'comma' })
      router.push(`?${queryString}`, { scroll: false })
    }

    isMounted.current = true
  }, [filters, router, searchParams])
}
