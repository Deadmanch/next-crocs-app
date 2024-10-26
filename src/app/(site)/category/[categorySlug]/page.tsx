import { notFound } from 'next/navigation'
import { getAllCategories, getCategoryBySlug } from '@/api'
import { CategoryList, Container } from '@/components'
import { ICategory, ICategoryResponse } from '@/interfaces'

export async function generateStaticParams() {
  const categories: ICategoryResponse = await getAllCategories()
  return categories.categories.map((category) => ({
    categorySlug: category.slug
  }))
}
export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { categorySlug: string }
  searchParams: { page?: string; query?: string }
}) {
  const category: ICategory = await getCategoryBySlug(params.categorySlug)
  const currentPage = searchParams?.page || '1'
  console.log('currentPage', currentPage)
  if (!category) notFound()

  return (
    <Container className='max-w-screen-1216'>
      <CategoryList
        categoryTitle={category.title}
        categoryId={category.id}
        categorySlug={category.slug}
        seoTextRight={category.seoTextRight}
        seoTextLeft={category.seoTextLeft}
        currentPage={currentPage}
      />
    </Container>
  )
}
