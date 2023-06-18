import type { ReactNode } from 'react'
import { classNames } from '@/helpers/classNames'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'delete'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

const buttonVariants = {
  primary: 'bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600',
  secondary: 'bg-gray-200 hover:bg-gray-300 focus-visible:outline-gray-600',
  delete: 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
}

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  isLink = false,
  href = '#',
  disabled = false
}: ButtonProps & { isLink?: boolean; href?: string }) => {
  if (isLink) {
    return (
      <a
        href={disabled ? '#' : href}
        className={classNames(
          'rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          buttonVariants[variant],
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        )}
        onClick={onClick}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        type={type}
        className={classNames(
          'rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          buttonVariants[variant],
          disabled ? 'opacity-50 cursor-not-allowed pointer-event-none' : ''
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}
