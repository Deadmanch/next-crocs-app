import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/interfaces'
import { cn } from '@/lib/utils'
import { Title, Button, ProductCard, Container } from '@/components'

interface CategoryBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  bigImage: string
  bigImageOrientation?: 'left' | 'right'
  products: IProduct[]
  categorySlug: string
}

export const CategoryBlock = ({
  title,
  bigImage,
  bigImageOrientation = 'left',
  products,
  categorySlug,
  className,
  ...props
}: CategoryBlockProps) => {
  return (
    <section className={cn('', className)} {...props}>
      <Container className='max-w-screen-1216'>
        <div className='flex flex-col gap-10 px-5 py-10 768:py-20 1216:px-0'>
          <Title tag='h2' className='text-center'>
            {title}
          </Title>
          <div
            className={`flex flex-col 1216:flex-row ${bigImageOrientation === 'right' ? '1216:flex-row-reverse' : ''} gap-5`}
          >
            {bigImage && (
              <div className='hidden w-full max-w-[392px] flex-none 1216:block'>
                <Image
                  className='border border-border'
                  src={bigImage}
                  alt={title}
                  width={392}
                  height={540}
                />
              </div>
            )}

            <div className='grid flex-auto grid-cols-1 gap-5 overflow-x-hidden 480:grid-cols-2 768:grid-cols-3 960:grid-cols-4 1216:grid-cols-2'>
              {products.length > 0 &&
                products.map((product, index) => (
                  <ProductCard
                    className={`480:hidden 1216:h-[260px] 1216:w-[392px] ${index < 2 ? '480:flex' : ''} 768:hidden ${index < 3 ? '768:flex' : ''} 960:hidden ${index < 4 ? '960:flex' : ''}`}
                    key={product.id}
                    categorySlug={categorySlug}
                    product={product}
                  />
                ))}
            </div>
          </div>
          <Button asChild variant='default' className='768:mx-auto'>
            <Link href={`/category/${categorySlug}`}>Go to catalog</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
