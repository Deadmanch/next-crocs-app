import { IProduct } from '@/interfaces'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components'
interface ProductGridListProps extends React.HTMLAttributes<HTMLDivElement> {
  products: IProduct[]
}

export const ProductGridList = ({ products, className }: ProductGridListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 480:grid-cols-2-category 768:grid-cols-3-category 960:grid-cols-4-category',
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} categorySlug={product.category.slug} />
      ))}
    </div>
  )
}
