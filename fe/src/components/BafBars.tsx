type BafBarsProps = {
  data: Array<{
    value: number
    color: string
  }>
  area: number
}

export const BafBars = ({ data, area }: BafBarsProps) => {
  const calculateInnerDivHeight = (value: number) => {
    return value === 0 ? 0 : (value / area) * 100
  }

  return (
    <div className="flex items-end gap-1 h-24">
      {data.map(({ value, color }) => (
        <div
          key={color}
          className="border-2 rounded-full w-2 min-h-[0.5rem]"
          style={{
            height: `${calculateInnerDivHeight(value)}%`,
            maxHeight: '100%',
            borderColor: color
          }}
        />
      ))}
    </div>
  )
}
