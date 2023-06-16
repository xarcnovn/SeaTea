import type { ReactNode } from 'react'
import { classNames } from '@/helpers/classNames'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'delete'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const buttonVariants = {
  primary: 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
  secondary: 'bg-gray-200 hover:bg-gray-300 focus-visible:outline-gray-600',
  delete: 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
}

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        'rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        buttonVariants[variant]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
