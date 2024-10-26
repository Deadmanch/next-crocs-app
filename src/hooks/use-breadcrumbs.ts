'use client'
import { usePathname } from 'next/navigation'

interface Breadcrumb {
  title: string
  href: string
}

export const useBreadcrumbs = (): Breadcrumb[] => {
  const pathname = usePathname()

  // Преобразуем путь из "/page1/page2" в массив ['page1', 'page2']
  const pathSegments = pathname.split('/').filter((segment) => segment)

  // Начинаем с элемента 'Home'
  const breadcrumbs: Breadcrumb[] = [{ title: 'Home', href: '/' }]

  // Генерируем хлебные крошки на основе сегментов пути
  pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const title = decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1))

    breadcrumbs.push({ title, href })
  })

  return breadcrumbs
}
