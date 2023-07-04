import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { usePlotData } from '@/store/store'
import { classNames } from '@/helpers/classNames'
import { DefaultLayout } from '@/components/DefaultLayout'
import { AccordionsHeader } from '@/components/AccordionsHeader'
import { BafVisualizer } from '@/components/BafVisualizer'
import { BafBars } from '@/components/BafBars'
import { Row } from '@/components/Row'
import * as C from './constants'
import * as H from './helpers'
import { Button } from '@/components/Button/Button'

export default function CalculateBAF() {
  const [surfaceValues, setSurfaceValues] = useState<{
    [key: string]: '' | number
  }>(C.initialState)
  const area = usePlotData(state => state.area)
  const plotType = usePlotData(state => state.type)
  const plotTypeName = plotType.name
  const minBafValue = plotType.minValue
  const baf = H.calculateBaf(surfaceValues, area)
  const [dupa, setDupa] = useState({})

  const resetSurfaceValues = () => {
    setSurfaceValues(C.initialState)
  }

  const updateSurfaceValues = (id: string, value: number) => {
    setSurfaceValues(prev => ({
      ...prev,
      [id]: value
    }))
  }

  useEffect(() => {
    fetch(
      'http://localhost:5001/plot_data/search_by_ids?plot_id=461&district_id=0020'
    )
      .then(res => res.json())
      .then(data => setDupa(data))
  }, [])

  return (
    <DefaultLayout>
      <Row className="grid-cols-2 max-w-7xl mx-auto p-12 gap-24">
        <div>
          <AccordionsHeader
            plotTypeName={plotTypeName}
            area={area}
            onReset={resetSurfaceValues}
          />
          <Accordion.Root
            type="single"
            collapsible
            defaultValue={C.indicators[0].id}
            className="space-y-4"
          >
            {C.indicators.map(indicator => (
              <Accordion.Item key={indicator.id} value={indicator.id}>
                <Accordion.Header
                  className="border-b-2 py-2 text-xl font-semibold"
                  style={{ borderColor: indicator.color }}
                >
                  <Accordion.Trigger className="w-full flex justify-between">
                    {indicator.label}
                    <div className="flex">
                      <p>
                        {H.sumCategoryValues(indicator.id, surfaceValues)}{' '}
                        <span className="font-normal inline-flex">
                          m<span className="text-xs">2</span>
                        </span>
                      </p>
                      <ChevronUpDownIcon className="ml-4 w-6 h-6" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                {indicator.fields.map(field => (
                  <Accordion.Content key={field.id} className="p-2">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-6 flex flex-col justify-center">
                        <p className="text-lg font-semibold leading-tight">
                          {field.label}
                        </p>
                        <p className="text-xs">{field.description}</p>
                      </div>
                      <div className="col-span-3 flex items-center justify-center">
                        <Image
                          src="/indicator.png"
                          alt={field.label}
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="col-span-3 flex items-center">
                        <input
                          className="h-12 rounded-md border border-gray-400 px-4 w-full"
                          type="number"
                          value={surfaceValues[field.id]}
                          onChange={e => {
                            const target = e.target as HTMLInputElement
                            updateSurfaceValues(field.id, Number(target.value))
                          }}
                        />
                        <span className="ml-2 inline-flex">
                          m<span className="text-xs">2</span>
                        </span>
                      </div>
                    </div>
                  </Accordion.Content>
                ))}
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
        <div>
          <div className="sticky top-32">
            <BafVisualizer
              area={area}
              data={H.generateBafVisualizerData(surfaceValues)}
            />
            <div className="flex gap-8 items-end my-12">
              <BafBars
                area={area}
                data={H.generateBafVisualizerData(surfaceValues)}
              />
              <div
                className={classNames(
                  'font-bold text-9xl leading-[0.77]',
                  baf < minBafValue && 'text-red-500'
                )}
              >
                {baf.toFixed(2)}
              </div>
            </div>
            <div className="flex gap-2">
              <Button as="link" href="/co-poprawic">
                Co poprawić
              </Button>
              <Button variant="secondary">Pobierz raport</Button>
            </div>
          </div>
        </div>
      </Row>
    </DefaultLayout>
  )
}
