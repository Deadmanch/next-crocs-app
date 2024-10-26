import { notFound } from 'next/navigation'
import { getAllCategories, getProductByCategory } from '@/api'
import {
  CategoryBlock,
  HeroBlock,
  MarqueeComponent,
  SubscribeBlock,
  SwiperCollection
} from '@/components'
import { ICategory, ICategoryResponse, IProductResponse } from '@/interfaces'

export default async function Home() {
  const { categories }: ICategoryResponse = await getAllCategories()
  const categoryWomen: ICategory | undefined = categories.find(
    (category) => category.slug === 'women'
  )
  const categoryMen: ICategory | undefined = categories.find((category) => category.slug === 'men')
  const categoryKids: ICategory | undefined = categories.find(
    (category) => category.slug === 'kids'
  )
  if (!categoryWomen || !categoryMen || !categoryKids) notFound()

  const productsWomen: IProductResponse = await getProductByCategory(categoryWomen.id, '4')
  const productsMen: IProductResponse = await getProductByCategory(categoryMen.id, '4')
  const productsKids: IProductResponse = await getProductByCategory(categoryKids.id, '4')

  return (
    <>
      <HeroBlock />
      <CategoryBlock
        bigImage='/images/category/woman-big.jpg'
        className='bg-background-violet'
        title={categoryWomen.name}
        products={productsWomen.products}
        categorySlug={categoryWomen.slug}
      />
      <MarqueeComponent />
      <CategoryBlock
        bigImage='/images/category/man-big.jpg'
        bigImageOrientation='right'
        title={categoryMen.name}
        products={productsMen.products}
        categorySlug={categoryMen.slug}
      />
      <SwiperCollection />
      <CategoryBlock
        bigImage='/images/category/kids-big.jpg'
        className='bg-background-violet'
        title={categoryKids.name}
        products={productsKids.products}
        categorySlug={categoryKids.slug}
      />
      <SubscribeBlock className='bg-background-yellow' />
    </>
  )
}
