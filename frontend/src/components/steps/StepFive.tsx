import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { InitialFields, InitialFieldsKeys } from '@/pages/oblicz_baf'

type StepFiveProps = {
  onNext: () => void
  onPrevious: () => void
  onFieldChange: (key: InitialFieldsKeys, value: number) => void
  fields: InitialFields
}

export const StepFive = ({
  onNext,
  onPrevious,
  fields,
  onFieldChange
}: StepFiveProps) => {
  const handleOnChange = (key: InitialFieldsKeys, value: string) => {
    onFieldChange(key, Number(value))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-16">Pozostałe</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="number"
          value={fields.development}
          onChange={e => handleOnChange('development', e.target.value)}
        >
          Zabudowa
        </Input>
        <Input
          type="number"
          value={fields.tree}
          onChange={e => handleOnChange('tree', e.target.value)}
        >
          Drzewo (pow. odkryta pod koroną, m2)
        </Input>
        <Input
          type="number"
          value={fields.shrub}
          onChange={e => handleOnChange('shrub', e.target.value)}
        >
          Krzew (pow. odkryta pod krzewem, m2)
        </Input>
        <Input
          type="number"
          value={fields.flowerMeadow}
          onChange={e => handleOnChange('flowerMeadow', e.target.value)}
        >
          Łąka kwietna
        </Input>
        <Input
          type="number"
          value={fields.grass}
          onChange={e => handleOnChange('grass', e.target.value)}
        >
          Trawa (murawa)
        </Input>
        <Input
          type="number"
          value={fields.greenRoofs}
          onChange={e => handleOnChange('greenRoofs', e.target.value)}
        >
          Dachy zielone
        </Input>
        <Input
          type="number"
          value={fields.greenWalls}
          onChange={e => handleOnChange('greenWalls', e.target.value)}
        >
          Ściany zielone
        </Input>
        <Input
          type="number"
          value={fields.climbingPlants}
          onChange={e => handleOnChange('climbingPlants', e.target.value)}
        >
          Ogród deszczowy (na 1m2)
        </Input>
        <Input
          type="number"
          value={fields.rainGarden}
          onChange={e => handleOnChange('rainGarden', e.target.value)}
        >
          Ogród deszczowy (na 1m2)
        </Input>
      </div>
      <div className="flex gap-2 mt-8">
        <Button onClick={onPrevious}>Wstecz</Button>
        <Button onClick={onNext}>Dalej</Button>
      </div>
    </div>
  )
}
