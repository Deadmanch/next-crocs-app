import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components'
import ArrowLeftIcon from '@/public/icons/arrow-left.svg'
import ArrowRightIcon from '@/public/icons/arrow.svg'

export interface PaginationProps {
  total: number
  value: number
  onChange: (page: number) => void
  className?: string
}

const Pagination = ({ total, value, onChange, className }: PaginationProps) => {
  const isFirstPage = value === 1
  const isLastPage = value === total

  const handlePrev = () => {
    if (!isFirstPage) {
      onChange(value - 1)
    }
  }

  const handleNext = () => {
    if (!isLastPage) {
      onChange(value + 1)
    }
  }

  const paginationItems = () => {
    const range = []
    let start = Math.max(1, value - 2)
    let end = Math.min(total, value + 2)

    if (value <= 3) {
      start = 1
      end = Math.min(5, total)
    } else if (value > total - 3) {
      start = total - 4
      end = total
    }

    for (let i = start; i <= end; i++) {
      range.push(
        <li key={i}>
          <Button
            onClick={() => onChange(i)}
            variant={i === value ? 'default' : 'ghost'}
            size='small'
            aria-current={i === value ? 'page' : undefined}
          >
            {i}
          </Button>
        </li>
      )
    }

    if (start > 1) {
      range.unshift(
        <li key='start-dots'>
          <DotsHorizontalIcon className='size-5' />
        </li>
      )
      range.unshift(
        <li key={1}>
          <Button
            onClick={() => onChange(1)}
            variant={value === 1 ? 'default' : 'ghost'}
            size='small'
            aria-current={value === 1 ? 'page' : undefined}
          >
            1
          </Button>
        </li>
      )
    }

    if (end < total) {
      range.push(
        <li key='end-dots'>
          <DotsHorizontalIcon className='size-5' />
        </li>
      )
      range.push(
        <li key={total}>
          <Button
            onClick={() => onChange(total)}
            variant={value === total ? 'default' : 'ghost'}
            size='small'
            aria-current={value === total ? 'page' : undefined}
          >
            {total}
          </Button>
        </li>
      )
    }

    return range
  }

  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
    >
      <ul className='flex flex-row items-center gap-1'>
        <li>
          <Button
            onClick={handlePrev}
            variant='ghost'
            disabled={isFirstPage}
            size='default'
            aria-label='Go to previous page'
            className='group gap-2 pl-2.5'
          >
            <ArrowLeftIcon className='size-5 transition-colors group-hover:stroke-white group-disabled:stroke-muted-foreground' />
            <span>Prev</span>
          </Button>
        </li>

        {paginationItems()}

        <li>
          <Button
            onClick={handleNext}
            disabled={isLastPage}
            variant='ghost'
            size='default'
            aria-label='Go to next page'
            className='group gap-1 pr-2.5'
          >
            <span>Next</span>
            <ArrowRightIcon className='size-5 transition-colors group-hover:stroke-white group-disabled:stroke-muted-foreground' />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

Pagination.displayName = 'Pagination'

export { Pagination }
