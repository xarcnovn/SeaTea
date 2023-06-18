import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { InitialFields, InitialFieldsKeys } from '@/pages/oblicz_baf'

type StepThreeProps = {
  onNext: () => void
  onPrevious: () => void
  onFieldChange: (key: InitialFieldsKeys, value: number) => void
  fields: InitialFields
}

export const StepThree = ({
  onNext,
  onPrevious,
  fields,
  onFieldChange
}: StepThreeProps) => {
  const handleOnChange = (key: InitialFieldsKeys, value: string) => {
    onFieldChange(key, Number(value))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-16">Powierzchnie perforowane</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          value={fields.mineralResinPaving}
          onChange={e => handleOnChange('mineralResinPaving', e.target.value)}
        >
          Nawierzchnia mineralno-żywiczna
        </Input>
        <Input
          type="text"
          value={fields.thistlePavingWithExpansionSpaces}
          onChange={e =>
            handleOnChange('thistlePavingWithExpansionSpaces', e.target.value)
          }
        >
          Kostka brukowa z przestrzeniami dylatacyjnymi
        </Input>
      </div>
      <div className="flex gap-2 mt-8">
        <Button onClick={onPrevious}>Wstecz</Button>
        <Button onClick={onNext}>Dalej</Button>
      </div>
    </div>
  )
}
