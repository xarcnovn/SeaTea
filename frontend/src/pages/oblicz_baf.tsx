import { useState } from 'react'
import { FindPlot } from '@/components/steps/FindPlot'
import { Tab } from '@/components/Tab'
import { TabsHeader } from '@/components/TabsHeader'
import { TabInput } from '@/components/TabInput'
import { classNames } from '@/helpers/classNames'
import { Button } from '@/components/Button'
import { ArrowDownRightIcon } from '@heroicons/react/20/solid'
import { Navbar } from '@/components/Navbar'

const indicators = {
  asphalt: 0,
  concrete: 0,
  stone: 0,
  gravel: 0.5,
  concreteOpenworkSlab: 0.5,
  resinCombinedAggregate: 0.5,
  otherBulkMaterials: 0.5,
  mineralResinPaving: 0.3,
  thistlePavingWithExpansionSpaces: 0.3,
  geogrid: 1,
  development: 0,
  tree: 1,
  shrub: 0.7,
  flowerMeadow: 0.7,
  grass: 0.3,
  greenRoofs: 0.7,
  greenWalls: 0.5,
  climbingPlants: 0.3,
  rainGarden: 0.7
}

type FieldItem = {
  label: string
  field: keyof typeof initialState
  description: string
}

const sealedFields: FieldItem[] = [
  {
    label: 'Asfalt',
    field: 'asphalt',
    description:
      'Gładka i nieprzepuszczalna powierzchnia utwardzona asfaltem, używana w drogach i parkingach'
  },
  {
    label: 'Beton',
    field: 'concrete',
    description: 'Powierzchnie wyasfaltowane i wysmołowane'
  },
  {
    label: 'Kamień',
    field: 'stone',
    description: 'Powierzchnie wyasfaltowane i wysmołowane'
  }
]

const semiSealedFields: FieldItem[] = [
  {
    label: 'Żwir',
    field: 'gravel',
    description: 'Opis żwiru'
  },
  {
    label: 'Płyta ażurowa betonowa',
    field: 'concreteOpenworkSlab',
    description: 'Opis płyty ażurowej betonowej'
  },
  {
    label: 'Kruszywa łączone żywicą',
    field: 'resinCombinedAggregate',
    description: 'Opis kruszyw łączonych żywicą'
  },
  {
    label: 'Inne materiały sypkie',
    field: 'otherBulkMaterials',
    description: 'Opis innych materiałów sypkich'
  }
]

const perforatedFields: FieldItem[] = [
  {
    label: 'Nawierzchnia mineralno-żywiczna',
    field: 'mineralResinPaving',
    description: 'Opis nawierzchni mineralno-żywicznej'
  },
  {
    label: 'Kostka brukowa z przestrzeniami dylatacyjnymi',
    field: 'thistlePavingWithExpansionSpaces',
    description: 'Opis kostki brukowej z przestrzeniami dylatacyjnymi'
  }
]

const permeableFields: FieldItem[] = [
  {
    label: 'Geokrata (geosiatka komórkowa)',
    field: 'geogrid',
    description: 'Opis geokraty'
  }
]

const bioDiverseFields: FieldItem[] = [
  {
    label: 'Zabudowa',
    field: 'development',
    description: 'Opis zabudowy'
  },
  {
    label: 'Drzewo (pow. odkryta pod koroną, m2)',
    field: 'tree',
    description: 'Opis drzewa'
  },
  {
    label: 'Krzew (pow. odkryta pod krzewem, m2)',
    field: 'shrub',
    description: 'Opis krzewu'
  },
  {
    label: 'Łąka kwietna',
    field: 'flowerMeadow',
    description: 'Opis łąki kwietnej'
  },
  {
    label: 'Trawa (murawa)',
    field: 'grass',
    description: 'Opis trawy'
  },
  {
    label: 'Dachy zielone',
    field: 'greenRoofs',
    description: 'Opis dachów zielonych'
  },
  {
    label: 'Ściany zielone',
    field: 'greenWalls',
    description: 'Opis ścian zielonych'
  },
  {
    label: 'Rośliny pnące (na 1m2 powierzchni)',
    field: 'climbingPlants',
    description: 'Opis roślin pnących'
  }
]

export const initialState = {
  asphalt: 0,
  concrete: 0,
  stone: 0,
  gravel: 0,
  concreteOpenworkSlab: 0,
  resinCombinedAggregate: 0,
  otherBulkMaterials: 0,
  mineralResinPaving: 0,
  thistlePavingWithExpansionSpaces: 0,
  geogrid: 0,
  development: 0,
  tree: 0,
  shrub: 0,
  flowerMeadow: 0,
  grass: 0,
  greenRoofs: 0,
  greenWalls: 0,
  climbingPlants: 0,
  rainGarden: 0
}

export type PlotType = { id: number; name: string; minValue: number }

export const plotTypes: Array<PlotType> = [
  { id: 1, name: 'Mieszkaniowa', minValue: 0.6 },
  { id: 2, name: 'Przestrzenie publ.', minValue: 0.6 },
  { id: 3, name: 'Usługowa', minValue: 0.3 },
  { id: 4, name: 'Produkcyjna', minValue: 0.3 },
  { id: 7, name: 'Usługowo-produkcyjna', minValue: 0.3 },
  { id: 5, name: 'Składy i magazyny', minValue: 0.5 },
  { id: 6, name: 'Usługowo-mieszkaniowa', minValue: 0.3 }
]

function sumFields(state: typeof initialState, fields: FieldItem[]) {
  return fields.reduce((total, item) => {
    return total + (state[item.field] || 0)
  }, 0)
}

export default function CalculateBaf() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<number>(0)
  const [plotType, setPlotType] = useState<PlotType>(plotTypes[0])
  const [bafValues, setBafValues] = useState(initialState)
  const [plotArea, setPlotArea] = useState<number>(0)
  const minValue = plotType?.minValue

  const keys = Object.keys(initialState) as Array<keyof typeof initialState>

  const sum = keys.reduce((acc: number, key) => {
    return acc + bafValues[key] * indicators[key]
  }, 0)

  const baf = sum / plotArea
  console.log(baf)

  return (
    <div className="flex pt-[73px]">
      <Navbar />
      {activeStepIndex === 0 ? (
        <>
          <div className="w-1/2 bg-lines min-h-screen py-24 px-16">
            <FindPlot
              plotType={plotType}
              onPlotTypeChange={setPlotType}
              onPlotAreaChange={setPlotArea}
              onNext={() => setActiveStepIndex(1)}
            />
          </div>
          <div className="w-1/2 bg-find-plot flex justify-center items-center" />
        </>
      ) : (
        <>
          <div className="w-1/2 min-h-screen py-24 px-16 flex flex-col gap-4">
            <TabsHeader
              name={plotType.name}
              area={plotArea}
              onReset={() => setBafValues(initialState)}
            />
            <Tab
              name="Powierzchnie szczelne"
              area={sumFields(bafValues, sealedFields)}
              isOpen={activeTab === 0}
              onClick={() => setActiveTab(0)}
              colorClass="border-gray-600"
            >
              {sealedFields.map(field => (
                <TabInput
                  key={field.field}
                  name={field.label}
                  description={field.description}
                  value={bafValues[field.field as keyof typeof bafValues]}
                  onChange={e =>
                    setBafValues({ ...bafValues, [field.field]: Number(e) })
                  }
                />
              ))}
            </Tab>
            <Tab
              name="Powierzchnie półprzepuszczalne"
              area={sumFields(bafValues, semiSealedFields)}
              isOpen={activeTab === 1}
              onClick={() => setActiveTab(1)}
              colorClass="border-amber-600"
            >
              {semiSealedFields.map(field => (
                <TabInput
                  key={field.field}
                  name={field.label}
                  description={field.description}
                  value={bafValues[field.field as keyof typeof bafValues]}
                  onChange={e =>
                    setBafValues({ ...bafValues, [field.field]: Number(e) })
                  }
                />
              ))}
            </Tab>
            <Tab
              name="Powierzchnie perforowane"
              area={sumFields(bafValues, perforatedFields)}
              isOpen={activeTab === 2}
              onClick={() => setActiveTab(2)}
              colorClass="border-yellow-600"
            >
              {perforatedFields.map(field => (
                <TabInput
                  key={field.field}
                  name={field.label}
                  description={field.description}
                  value={bafValues[field.field as keyof typeof bafValues]}
                  onChange={e =>
                    setBafValues({ ...bafValues, [field.field]: Number(e) })
                  }
                />
              ))}
            </Tab>
            <Tab
              name="Powierzchnie przepuszczalne"
              area={sumFields(bafValues, permeableFields)}
              isOpen={activeTab === 3}
              onClick={() => setActiveTab(3)}
              colorClass="border-blue-600"
            >
              {permeableFields.map(field => (
                <TabInput
                  key={field.field}
                  name={field.label}
                  description={field.description}
                  value={bafValues[field.field as keyof typeof bafValues]}
                  onChange={e =>
                    setBafValues({ ...bafValues, [field.field]: Number(e) })
                  }
                />
              ))}
            </Tab>
            <Tab
              name="Powierzchnie bio-różnorodne"
              area={sumFields(bafValues, bioDiverseFields)}
              isOpen={activeTab === 4}
              onClick={() => setActiveTab(4)}
              colorClass="border-green-600"
            >
              {bioDiverseFields.map(field => (
                <TabInput
                  key={field.field}
                  name={field.label}
                  description={field.description}
                  value={bafValues[field.field as keyof typeof bafValues]}
                  onChange={e =>
                    setBafValues({ ...bafValues, [field.field]: Number(e) })
                  }
                />
              ))}
            </Tab>
          </div>
          <div className="w-1/2 min-h-screen py-24 px-16">
            <div className="w-80 h-80 border-2 border-black flex flex-col-reverse">
              tutaj dane
            </div>
            <span
              className={classNames(
                'block text-9xl font-semibold mt-12 mb-8',
                minValue && minValue > baf ? 'text-red-500' : ''
              )}
            >
              {baf.toFixed(2)}
            </span>
            <Button disabled={minValue > baf}>
              <span className="inline-flex items-center">
                Pobierz raport <ArrowDownRightIcon className="ml-4 w-6 h-6" />
              </span>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
