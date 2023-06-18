import { ReactNode, ChangeEvent } from 'react'
import { classNames } from '@/helpers/classNames'

type InputProps = {
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  children: ReactNode
  className?: string
  type?: 'text' | 'number'
}

export const Input = ({
  value,
  onChange,
  children,
  className = '',
  type = 'text'
}: InputProps) => {
  return (
    <label className={classNames('block', className)}>
      <span className="block text-sm font-semibold mb-1">{children}</span>
      <input
        type={type}
        value={value}
        className="rounded-md py-2 px-4 text-gray-900 w-full border border-gray-500"
        onChange={onChange}
      />
    </label>
  )
}
