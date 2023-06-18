import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { InitialFields, InitialFieldsKeys } from '@/pages/oblicz_baf'

type StepFourProps = {
  onNext: () => void
  onPrevious: () => void
  onFieldChange: (key: InitialFieldsKeys, value: number) => void
  fields: InitialFields
}

export const StepFour = ({
  onNext,
  onPrevious,
  fields,
  onFieldChange
}: StepFourProps) => {
  const handleOnChange = (key: InitialFieldsKeys, value: string) => {
    onFieldChange(key, Number(value))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-16">Powierzchnie przepuszczalne</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="number"
          value={fields.geogrid}
          onChange={e => handleOnChange('geogrid', e.target.value)}
        >
          Geokrata (geosiatka komórkowa)
        </Input>
      </div>
      <div className="flex gap-2 mt-8">
        <Button onClick={onPrevious}>Wstecz</Button>
        <Button onClick={onNext}>Dalej</Button>
      </div>
    </div>
  )
}
