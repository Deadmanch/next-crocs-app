import { IProduct } from '@/interfaces'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/components'
interface ProductGridListProps extends React.HTMLAttributes<HTMLDivElement> {
  products: IProduct[]
  categorySlug: string
}

export const ProductGridList = ({ products, categorySlug, className }: ProductGridListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 480:grid-cols-2 768:grid-cols-3 960:grid-cols-4',
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} categorySlug={categorySlug} />
      ))}
    </div>
  )
}
