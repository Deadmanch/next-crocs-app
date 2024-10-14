import MastercardIcon from '@/public/icons/payment/mastercard.svg'
import VisaIcon from '@/public/icons/payment/visa.svg'
import PaypalIcon from '@/public/icons/payment/paypal.svg'

const mockData = [
  {
    id: 1,
    icon: <VisaIcon />
  },
  {
    id: 2,
    icon: <MastercardIcon />
  },
  {
    id: 3,
    icon: <PaypalIcon />
  }
]

export const Payment = () => {
  return (
    <div className='flex items-center gap-4'>
      {mockData.map((item) => (
        <div key={item.id}>{item.icon}</div>
      ))}
    </div>
  )
}
