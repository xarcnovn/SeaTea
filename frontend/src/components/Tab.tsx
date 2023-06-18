import { ReactNode } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/helpers/classNames'

type TabProps = {
  name: string
  area: number
  isOpen: boolean
  children: ReactNode
  colorClass: string
  onClick: () => void
}

export const Tab = ({
  name,
  area,
  children,
  isOpen,
  colorClass,
  onClick
}: TabProps) => {
  // if (!isOpen) return null

  return (
    <div>
      <div
        className={classNames(
          'flex border-b-2 cursor-pointer py-2',
          colorClass
        )}
        onClick={onClick}
      >
        <p className="text-lg font-semibold">{name}</p>
        <p className="ml-auto font-semibold">
          {area} <span className="font-normal">m</span>
        </p>
        <ChevronDownIcon
          className={classNames(
            'w-6 h-6',
            isOpen ? 'transform rotate-180' : ''
          )}
        />
      </div>
      {isOpen && <div className="py-4 flex flex-col gap-4">{children}</div>}
    </div>
  )
}
