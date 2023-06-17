import { useState } from 'react'
import { Button } from '@/components/Button'

const calculatorFields = [
  {
    category: 'Powierzchnie szczelne',
    fields: [
      { label: 'Asfalt', field: 'asphalt' },
      { label: 'Beton', field: 'concrete' },
      { label: 'Kamień', field: 'stone' }
    ]
  },
  {
    category: 'Powierzchnie półszczelne',
    fields: [
      { label: 'Gravel', field: 'gravel' },
      { label: 'Płyta ażurowa betonowa', field: 'concreteOpenworkSlab' },
      { label: 'Kruszywa łączone żywicą', field: 'resinCombinedAggregate' },
      { label: 'Inne materiały sypkie', field: 'otherBulkMaterials' }
    ]
  },
  {
    category: 'Powierzchnie perforowane',
    fields: [
      {
        label: 'Nawierzchnia mineralno-żywiczna',
        field: 'mineralResinPaving'
      },
      {
        label: 'Kostka brukowa z przestrzeniami dylatacyjnymi',
        field: 'thistlePavingWithExpansionSpaces'
      }
    ]
  },
  {
    category: 'Powierzchnie przepuszczalne',
    fields: [{ label: 'Geokrata (geosiatka komórkowa)', field: 'geogrid' }]
  },
  {
    category: 'Pozostałe',
    fields: [
      { label: 'Zabudowa', field: 'development' },
      { label: 'Drzewo (pow. odkryta pod koroną, m2)', field: 'tree' },
      { label: 'Krzew (pow. odkryta pod krzewem, m2)', field: 'shrub' },
      { label: 'Łąka kwietna', field: 'flower meadow' },
      { label: 'Trawa (murawa)', field: 'grass' },
      { label: 'Dachy zielone', field: 'greenRoofs' },
      { label: 'Ściany zielone', field: 'greenWalls' },
      { label: 'Rośliny pnące (na 1m2 powierzchni)', field: 'climbingPlants' },
      { label: 'Ogród deszczowy (na 1m2)', field: 'rainGarden' }
    ]
  }
] as const

export const Calculator = () => {
  const [visibleStepIndex, setVisibleStepIndex] = useState(0)

  function calculateBaf() {}

  function nextStep() {
    if (visibleStepIndex === calculatorFields.length - 1) return
    setVisibleStepIndex(prev => prev + 1)
  }

  function previousStep() {
    if (visibleStepIndex === 0) return
    setVisibleStepIndex(prev => prev - 1)
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">
        {calculatorFields[visibleStepIndex].category}
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {calculatorFields[visibleStepIndex].fields.map(({ field, label }) => (
          <div className="border border-gray-200 rounded-md p-4 flex flex-col">
            <img src="img.png" className="mb-4 rounded-md" />
            <label className="mt-auto">
              <span className="block font-semibold">{label}</span>
              <input
                className="block w-full py-2 px-2 border-2 border-gray-400 rounded-md"
                min={0}
                type="number"
              />
            </label>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-10">
        <Button onClick={previousStep}>Cofnij</Button>
        {visibleStepIndex === calculatorFields.length - 1 ? (
          <Button onClick={nextStep}>Dalej</Button>
        ) : (
          <Button onClick={nextStep}>Zakończ</Button>
        )}
      </div>
    </div>
  )
}
