import { create } from 'zustand'
import type { PlotType } from '@/constants/plotTypes'
import { plotTypes } from '@/constants/plotTypes'

export const usePlotData = create<{
  type: PlotType
  area: number
  setType: (type: PlotType) => void
  setArea: (area: number) => void
}>(set => ({
  type: plotTypes[0],
  area: 0,
  setType: (type: PlotType) => set({ type }),
  setArea: (area: number) => set({ area })
}))
