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

// przykladowa dzialka: 5801

export const FindPlot = ({
  onPlotTypeChange,
  onPlotAreaChange,
  plotType,
  onNext
}: FindPlotProps) => {
  const [plotAreaId, setPlotAreaId] = useState('')
  const [precinctId, setPrecinctId] = useState('')

  const handleAreaIdSubmit = async () => {
    /*
     * Normalnie zrobilbym tutaj try/catch oraz obsluzyl ladowanie sie danych
     * lub ewentualne bledy, moze react-query, jakies walidacje itp.
     * */

    const result = await axios.get<{ area: number }>(
      `http://localhost:5000/plot_area/id/${plotAreaId}`
    )
    const data = Number(result.data.area.toFixed(2))
    onPlotAreaChange(data)
    onNext()
  }

  console.log(plotAreaId)

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
          <div className="flex gap-6 mb-8">
            <Input
              value={precinctId}
              onChange={e => setPrecinctId(e.target.value)}
            >
              Number obrębu
            </Input>
            <Input
              value={plotAreaId}
              onChange={e => setPlotAreaId(e.target.value)}
            >
              Number działki
            </Input>
          </div>
        </div>
        <Button onClick={handleAreaIdSubmit}>Dalej</Button>
      </div>
    </div>
  )
}
