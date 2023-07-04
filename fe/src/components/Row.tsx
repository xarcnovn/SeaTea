import type { ReactNode } from 'react'
import { classNames } from '@/helpers/classNames'

type RowProps = {
  children: ReactNode
  className?: string
}

export const Row = ({ children, className }: RowProps) => {
  return <div className={classNames('grid', className)}>{children}</div>
}
