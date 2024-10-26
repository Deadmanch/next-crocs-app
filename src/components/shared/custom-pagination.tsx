'use client'
import * as React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from '@/components'
import { usePagination } from '@/hooks'

interface CustomPaginationProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  totalPages: number
}

export const CustomPagination = ({ totalPages, className, ...props }: CustomPaginationProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const pages = usePagination({ currentPage, totalPages })

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination className={className} {...props}>
      <PaginationContent>
        <PaginationPrevious
          href={createPageURL(currentPage - 1)}
          className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
        />

        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === 'dots' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink href={createPageURL(page)} isActive={page === currentPage}>
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationNext
          href={createPageURL(currentPage + 1)}
          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
        />
      </PaginationContent>
    </Pagination>
  )
}
