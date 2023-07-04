import type { ElementType } from 'react'
import Link from 'next/link'
import { ArrowDownRightIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/helpers/classNames'
import type { ButtonProps } from './Button.constants'

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    as = 'button',
    onClick,
    disabled,
    type = 'button',
    variant = 'primary',
    ...rest
  } = props
  const cssBase =
    'inline-flex gap-2 items-center px-6 min-w-[10rem] h-12 rounded-md ' +
    'font-semibold focus:outline-none focus:ring-2 ' +
    'focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-[#BACA40] focus:ring-[#BACA40] text-white',
    secondary:
      'bg-white-400 focus:ring-gray-600 text-gray-600 border-2 border-gray-600'
  }

  const arrowVariants = {
    primary: 'fill-white',
    secondary: 'fill-gray-600'
  }

  const Component: ElementType = as === 'link' ? Link : 'button'
  const componentProps = {
    className: classNames(cssBase, variants[variant], className),
    disabled,
    ...(onClick && { onClick }),
    ...(Component === 'button' && type && { type }),
    ...rest
  }

  return (
    <Component {...componentProps}>
      {children}
      <ArrowDownRightIcon
        className={classNames('w-6 h-6 ml-auto', arrowVariants[variant])}
      />
    </Component>
  )
}
