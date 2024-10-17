import { getBadgeVariants } from '@/helpers/get-badge-variant'
import { Badge } from '@/components/'
import { cn } from '@/lib/utils'

interface ProductBadgesProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[]
}

export const ProductBadges = ({ className, tags, ...props }: ProductBadgesProps) => {
  const variants = getBadgeVariants(tags)

  return (
    <div className={cn('flex flex-wrap gap-2', className)} {...props}>
      {tags.map((tag, index) => (
        <Badge key={tag} variant={variants[index % variants.length]}>
          {tag}
        </Badge>
      ))}
    </div>
  )
}
