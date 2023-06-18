import axios from 'axios'
import { useState } from 'react'
import { Input } from '../Input'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { plotTypes } from '@/pages/oblicz_baf'
import type { PlotType } from '@/pages/oblicz_baf'

type FindPlotProps = {
  onPlotTypeChange: (plotType: PlotType) => void
  plotType: PlotType | null
  onNext: () => void
  onPlotAreaChange: (plotArea: number) => void
}

// 246501_1.0020.5801

export const FindPlot = ({
  onPlotTypeChange,
  onPlotAreaChange,
  plotType,
  onNext
}: FindPlotProps) => {
  const [plotAreaId, setPlotAreaId] = useState('')

  const handleAreaIdSubmit = async () => {
    // const data = await axios.get(
    //   'https://147a-148-81-191-8.ngrok-free.app/plot_area/id/asdasda'
    // )
  }

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Aplikacja</h2>
      <p className="mb-10">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="max-w-sm">
        <div className="flex flex-col gap-4">
          <Select
            value={plotType}
            onChange={onPlotTypeChange}
            options={plotTypes}
          />
          <Input
            value={plotAreaId}
            onChange={e => setPlotAreaId(e.target.value)}
            className="mb-8"
          >
            Adres lub numer działki
          </Input>
        </div>
        <Button
          onClick={() => {
            onPlotAreaChange(132)
            onNext()
          }}
        >
          Dalej
        </Button>
      </div>
    </div>
  )
}
