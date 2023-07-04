import type { FormEvent } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Form from '@radix-ui/react-form'
import ky from 'ky'
import { usePlotData } from '@/store/store'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { BackgroundColumn } from '@/components/BackgroundColumn'
import { Paragraph, PrimaryHeadline } from '@/components/Typography'
import { Button } from '@/components/Button/Button'
import { Select } from '@/components/Select'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function FindPlot() {
  const router = useRouter()
  const setPlotType = usePlotData(state => state.setType)
  const setArea = usePlotData(state => state.setArea)
  const [activeTab, setActiveTab] = useState<
    'search_by_ids' | 'search_by_address'
  >('search_by_ids')
  const [requestStatus, setRequestStatus] = useState<
    'idle' | 'pending' | 'rejected'
  >('idle')

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'search_by_ids' | 'search_by_address')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements

    const getValue = (name: string) =>
      (formElements.namedItem(name) as HTMLInputElement).value

    const plotType = getValue('plotType')
    const searchParams = {
      ...(activeTab === 'search_by_ids' && {
        district_id: getValue('plotDistrictId'),
        plot_id: getValue('plotId')
      }),
      ...(activeTab === 'search_by_address' && {
        street: getValue('plotStreet'),
        number: getValue('plotNumber')
      })
    }

    try {
      setRequestStatus('pending')
      const data = (await ky
        .get(`http://localhost:5001/plot_data/${activeTab}`, {
          searchParams
        })
        .json()) as { area: number }
      setArea(+data.area.toFixed(0))
      setPlotType(JSON.parse(plotType))
      router.push('/oblicz-baf')
    } catch (e) {
      setRequestStatus('rejected')
    }
  }

  return (
    <DefaultLayout>
      <Row className="grid-cols-2">
        <div className="p-24 flex items-center">
          <div className="w-full max-w-xl mx-auto">
            <PrimaryHeadline className="mb-2">
              Dane Twojej działki
            </PrimaryHeadline>
            <Paragraph className="mb-16">
              Jednym z czynników potrzebnych do policzenia BAFu jest
              powierzchnia działki. Wprowadź jej number lub adres, a my
              pobierzemy jej powierzchnię.
            </Paragraph>
            <Form.Root onSubmit={handleSubmit}>
              <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
                <Tabs.List className="flex space-x-2 border-b-2 pb-2">
                  <Tabs.Trigger
                    value="search_by_ids"
                    className="data-[state='active']:text-gray-600 data-[state='active']:bg-gray-100 py-2 px-4 rounded-md font-semibold text-gray-400 hover:text-gray-600"
                  >
                    Numer działki
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="search_by_address"
                    className="data-[state='active']:text-gray-600 data-[state='active']:bg-gray-100 p-2 rounded-md font-semibold text-gray-400 hover:text-gray-600"
                  >
                    Adres działki
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  value="search_by_ids"
                  className="pt-8 focus:outline-0"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <Form.Field name="plotDistrictId">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Numer obrębu
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4 focus:outline-gray-600"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                    <Form.Field name="plotId">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Numer działki
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4 focus:outline-gray-600"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                  </div>
                </Tabs.Content>
                <Tabs.Content
                  value="search_by_address"
                  className="pt-8 focus:outline-0"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <Form.Field name="plotStreet">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Ulica
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                    <Form.Field name="plotNumber">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Numer budynku
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
              <Form.Field name="plotType" className="mt-6">
                <Form.Label className="text-sm font-semibold mb-1 block">
                  Typ działki
                </Form.Label>
                <Form.Control asChild>
                  <Select />
                </Form.Control>
              </Form.Field>
              {requestStatus === 'rejected' && (
                <div className="bg-red-200 p-4 rounded-md text-red-500 text-sm mt-12">
                  Nie udało się pobrac danych podanej działki. Spróbuj ponownie.
                </div>
              )}
              <div className="flex justify-end">
                <Button
                  className="mt-12"
                  type="submit"
                  disabled={requestStatus === 'pending'}
                >
                  Dalej
                </Button>
              </div>
            </Form.Root>
          </div>
        </div>
        <BackgroundColumn bgClassName="bg-plot" />
      </Row>
    </DefaultLayout>
  )
}
