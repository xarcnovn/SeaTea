import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { InitialFields, InitialFieldsKeys } from '@/pages/oblicz_baf'

type StepTwoProps = {
  onNext: () => void
  onPrevious: () => void
  onFieldChange: (key: InitialFieldsKeys, value: number) => void
  fields: InitialFields
}

export const StepTwo = ({
  onNext,
  onPrevious,
  fields,
  onFieldChange
}: StepTwoProps) => {
  const handleOnChange = (key: InitialFieldsKeys, value: string) => {
    onFieldChange(key, Number(value))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-16">Powierzchnie półszczelne</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="number"
          value={fields.gravel}
          onChange={e => handleOnChange('gravel', e.target.value)}
        >
          Żwir
        </Input>
        <Input
          type="number"
          value={fields.concreteOpenworkSlab}
          onChange={e => handleOnChange('concreteOpenworkSlab', e.target.value)}
        >
          Płyta ażurowa betonowa
        </Input>
        <Input
          type="number"
          value={fields.resinCombinedAggregate}
          onChange={e =>
            handleOnChange('resinCombinedAggregate', e.target.value)
          }
        >
          Kruszywa łączone żywicą
        </Input>
        <Input
          type="number"
          value={fields.otherBulkMaterials}
          onChange={e => handleOnChange('otherBulkMaterials', e.target.value)}
        >
          Inne materiały sypkie
        </Input>
      </div>
      <div className="flex gap-2 mt-8">
        <Button onClick={onPrevious}>Wstecz</Button>
        <Button onClick={onNext}>Dalej</Button>
      </div>
    </div>
  )
}
