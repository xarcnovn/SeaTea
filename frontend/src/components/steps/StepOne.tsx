import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { InitialFields, InitialFieldsKeys } from '@/pages/oblicz_baf'

type StepOneProps = {
  onNext: () => void
  onPrevious: () => void
  onFieldChange: (key: InitialFieldsKeys, value: number) => void
  fields: InitialFields
}

export const StepOne = ({
  onNext,
  onPrevious,
  fields,
  onFieldChange
}: StepOneProps) => {
  const handleOnChange = (key: InitialFieldsKeys, value: string) => {
    onFieldChange(key, Number(value))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-16">Powierzchnie szczelne</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="number"
          value={fields.asphalt}
          onChange={e => handleOnChange('asphalt', e.target.value)}
        >
          Asfalt
        </Input>
        <Input
          type="number"
          value={fields.concrete}
          onChange={e => handleOnChange('concrete', e.target.value)}
        >
          Beton
        </Input>
        <Input
          type="number"
          value={fields.stone}
          onChange={e => handleOnChange('stone', e.target.value)}
        >
          Kamień
        </Input>
      </div>
      <div className="flex gap-2 mt-8">
        <Button onClick={onPrevious}>Wstecz</Button>
        <Button onClick={onNext}>Dalej</Button>
      </div>
    </div>
  )
}
