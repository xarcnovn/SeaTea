import { ArrowPathIcon } from '@heroicons/react/20/solid'

type TabsHeaderProps = {
  name: string
  area: number
  onReset: () => void
}

export const TabsHeader = ({ name, area, onReset }: TabsHeaderProps) => {
  return (
    <div className="flex items-center mb-4 border-b-2 border-gray-400 py-2">
      <p className="text-2xl font-bold">{name}</p>
      <p className="ml-auto text-2xl font-bold">
        {area}{' '}
        <span className="font-normal inline-flex">
          m<span className="text-sm">2</span>
        </span>
      </p>
      <button onClick={onReset}>
        <ArrowPathIcon className="ml-2 w-6 h-6" />
      </button>
    </div>
  )
}
