import PlusIcon from '@/public/icons/plus.svg'
import MinusIcon from '@/public/icons/minus.svg'

interface IconButtonProps {
  disabled?: boolean
  type?: 'plus' | 'minus'
  onClick?: () => void
}

export const CountButtonIcon = ({ disabled, type, onClick }: IconButtonProps) => {
  return (
    <button disabled={disabled} className='group' onClick={onClick}>
      {type === 'plus' && <PlusIcon className='group-hover:scale-110' />}
      {type === 'minus' && <MinusIcon className='group-hover:scale-110' />}
    </button>
  )
}
