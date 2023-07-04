type BafVisualizerProps = {
  data: Array<{
    value: number
    color: string
  }>
  area: number
}

export const BafVisualizer = ({ data, area }: BafVisualizerProps) => {
  const calculateInnerDivHeight = (value: number) => {
    return value === 0 ? 0 : (value / area) * 100
  }

  return (
    <div className="aspect-square max-w-sm max-h-[24rem] w-full border-2 border-black flex flex-col justify-end">
      {data.map(({ value, color }) => (
        <div
          key={color}
          style={{
            height: `${calculateInnerDivHeight(value)}%`,
            maxHeight: '100%',
            background: color,
            width: '100%'
          }}
        />
      ))}
    </div>
  )
}
