import { BadgeProps } from '@/components'

export const tagToVariantMap: Record<string, BadgeProps['variant']> = {
  New: 'new',
  Sale: 'sale',
  Limited: 'limited'
}

export const getBadgeVariants = (tags: string[]): Array<BadgeProps['variant']> => {
  const variants: Array<BadgeProps['variant']> = tags
    .map((tag) => tagToVariantMap[tag])
    .filter((variant) => variant !== undefined)

  return variants.length > 0 ? variants : ['new']
}
