export type PlotType = { id: number; name: string; minValue: number }

export const plotTypes: Array<PlotType> = [
  { id: 1, name: 'Mieszkaniowa', minValue: 0.6 },
  { id: 2, name: 'Przestrzenie publ.', minValue: 0.6 },
  { id: 3, name: 'Usługowa', minValue: 0.3 },
  { id: 4, name: 'Produkcyjna', minValue: 0.3 },
  { id: 7, name: 'Usługowo-produkcyjna', minValue: 0.3 },
  { id: 5, name: 'Składy i magazyny', minValue: 0.5 },
  { id: 6, name: 'Usługowo-mieszkaniowa', minValue: 0.3 }
]
