'use client'
import { HTMLAttributes } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import ArrowIconRight from '@/public/icons/arrow-right.svg'
import { sendEmailSchema, Input } from '@/components'

interface SendEmailFormProps extends HTMLAttributes<HTMLFormElement> {}

export const SendEmailForm = ({ className, ...props }: SendEmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<{ email: string }>({
    resolver: zodResolver(sendEmailSchema)
  })
  const onSubmit = () => {
    console.log('submit')
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('relative', className)} {...props}>
      <Input
        className='pr-16'
        type='email'
        placeholder='Email'
        aria-label='Email'
        {...register('email')}
        error={errors.email}
      />
      <button type='submit' className='absolute right-5 top-3 ml-auto -translate-y-1'>
        <ArrowIconRight />
      </button>
    </form>
  )
}
