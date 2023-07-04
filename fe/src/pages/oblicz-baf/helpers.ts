import * as C from '@/pages/oblicz-baf/constants'

export const sumCategoryValues = (
  indicatorsGroupId: string,
  surfaceValues: {
    [key: string]: '' | number
  }
) => {
  const foundIndicatorsGroup = C.indicators.find(
    indicator => indicator.id === indicatorsGroupId
  )
  if (!foundIndicatorsGroup) {
    return 0
  }
  return foundIndicatorsGroup?.fields.reduce((previousValue, currentValue) => {
    return previousValue + Number(surfaceValues[currentValue.id])
  }, 0)
}

export const generateBafVisualizerData = (surfaceValues: {
  [key: string]: '' | number
}) => {
  const indicatorGroupIds = C.indicators.map(indicator => indicator.id)
  return indicatorGroupIds.map(indicatorGroupId => {
    return {
      value: sumCategoryValues(indicatorGroupId, surfaceValues),
      color:
        C.indicators.find(indicator => indicator.id === indicatorGroupId)
          ?.color || ''
    }
  })
}

const indicatorMap: { [key: string]: number } = {}
C.indicators.forEach(group => {
  group.fields.forEach(field => {
    indicatorMap[field.id] = field.indicator
  })
})

export const calculateBaf = (
  surfaceValues: { [key: string]: '' | number },
  area: number
) => {
  const keys = Object.keys(surfaceValues)

  const numerator = keys.reduce((total, key) => {
    let value = surfaceValues[key]
    if (value === '') {
      value = 0
    }
    const indicator = indicatorMap[key] || 0
    return total + value * indicator
  }, 0)

  return area === 0 || numerator === 0 ? 0 : numerator / area
}
