import axios from 'axios'
import { useState } from 'react'
import { Input } from '../Input'
import { Button } from '@/components/Button'

export const FindPlot = () => {
  const [plotAreaId, setPlotAreaId] = useState('')

  // 246501_1.0020.5801

  const handleAreaIdSubmit = async () => {
    const data = await axios.get(
      'https://7d6b-148-81-191-8.ngrok-free.app/plot_area/id/asdasda'
    )
    console.log(data)
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
        <Input>Wpisz adres</Input>
        <div className="flex gap-2 items-center py-10">
          <div className="h-[1px] bg-gray-500 w-full" />
          <span className="font-bold">Lub</span>
          <div className="h-[1px] bg-gray-500 w-full" />
        </div>
        <Input
          value={plotAreaId}
          onChange={e => setPlotAreaId(e.target.value)}
          className="mb-8"
        >
          Wpisz numer działki
        </Input>
        <Button onClick={handleAreaIdSubmit}>Dalej</Button>
      </div>
    </div>
  )
}
