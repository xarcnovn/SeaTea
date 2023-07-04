import type { ReactNode } from 'react'
import { classNames } from '@/helpers/classNames'

type TextProps = {
  children: ReactNode
  className?: string
}

export const PrimaryHeadline = ({ children, className }: TextProps) => {
  return (
    <h1 className={classNames('text-4xl font-bold', className)}>{children}</h1>
  )
}

export const SecondaryHeadline = ({ children, className }: TextProps) => {
  return (
    <h2 className={classNames('text-2xl font-bold', className)}>{children}</h2>
  )
}

export const Paragraph = ({ children, className }: TextProps) => {
  return <p className={classNames('text-gray-500', className)}>{children}</p>
}
