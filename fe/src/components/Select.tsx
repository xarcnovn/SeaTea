import type { ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import type { PlotType } from '@/constants/plotTypes'
import { plotTypes } from '@/constants/plotTypes'

export const Select = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithRef<'select'>
>((props, ref) => {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute bg-white px-2 top-1/2 -translate-y-1/2 right-[2px] bg-white">
        <ChevronUpDownIcon className="w-6 h-6" />
      </span>
      <select
        ref={ref}
        name="plotType"
        className="w-full border border-gray-400 rounded-md h-12 px-4 cursor-pointer"
        {...props}
      >
        {plotTypes.map((plotType: PlotType) => (
          <option key={plotType.id} value={JSON.stringify(plotType)}>
            {plotType.name}
          </option>
        ))}
      </select>
    </div>
  )
})

Select.displayName = 'Select'
