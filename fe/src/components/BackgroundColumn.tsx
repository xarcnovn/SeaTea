import { classNames } from '@/helpers/classNames'

type BackgroundColumnProps = {
  bgClassName: 'bg-main' | 'bg-plot' | 'bg-improvements'
}

export const BackgroundColumn = ({ bgClassName }: BackgroundColumnProps) => {
  return (
    <div
      className={classNames(
        'h-[calc(100vh-5rem)] bg-cover bg-center sticky top-[5rem]',
        bgClassName
      )}
    />
  )
}
