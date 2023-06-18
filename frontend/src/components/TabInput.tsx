type TabInputProps = {
  name: string
  description: string
  value: number
  onChange: (value: string) => void
}

export const TabInput = ({
  name,
  description,
  value,
  onChange
}: TabInputProps) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-6">
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{description}</p>
      </div>
      <div className="col-span-2 flex items-center">
        <img src="tab-input.png" />
      </div>
      <div className="col-span-4 flex items-center relative">
        <p className="absolute right-4 inline-flex">
          m<span className="text-[10px]">2</span>
        </p>
        <input
          className="py-2 pl-4 pr-8 w-full border border-gray-400 rounded-md text-right font-semibold"
          value={value}
          min={0}
          type="number"
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
