import type { ReactNode } from 'react'
import { classNames } from '@/helpers/classNames'
import { Navbar } from '@/components/Navbar'

type DefaultLayoutProps = {
  children: ReactNode
  className?: string
}

export const DefaultLayout = ({ children, className }: DefaultLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className={classNames('pt-20', className)}>{children}</div>
    </>
  )
}
