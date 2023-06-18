import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/helpers/classNames'
import { PlotType } from '@/pages/oblicz_baf'

type SelectProps = {
  options: Array<PlotType>
  value: PlotType | null
  onChange: (value: PlotType) => void
}

export function Select({ options, value, onChange }: SelectProps) {
  return (
    <Listbox as="div" value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-semibold mb-1">
            Typ działki
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="h-[42px] relative w-full cursor-default rounded-md bg-white py-2 pl-4 pr-10 text-left text-gray-900 border border-gray-500">
              {value && <span className="block truncate">{value.name}</span>}
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map(option => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-green-100' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-4 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            }
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
