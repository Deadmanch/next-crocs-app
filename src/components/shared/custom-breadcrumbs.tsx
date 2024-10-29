'use client'
import { Slash } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage
} from '@/components'
import { useBreadcrumbs } from '@/hooks'
import { cn } from '@/lib/utils'

interface CustomBreadcrumbsProps {
  className?: string
}

export const CustomBreadcrumbs = ({ className }: CustomBreadcrumbsProps) => {
  const breadcrumbs = useBreadcrumbs()
  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.title}>
            {index === breadcrumbs.length - 1 ? (
              <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.title}</BreadcrumbLink>
                <Slash className='size-[18px]' />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
