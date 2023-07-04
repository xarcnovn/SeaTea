import { Row } from '@/components/Row'
import { DefaultLayout } from '@/components/DefaultLayout'
import {
  PrimaryHeadline,
  Paragraph,
  SecondaryHeadline
} from '@/components/Typography'
import { Button } from '@/components/Button/Button'
import { BackgroundColumn } from '@/components/BackgroundColumn'

export default function Home() {
  return (
    <DefaultLayout>
      <Row className="grid-cols-2">
        <BackgroundColumn bgClassName="bg-main" />
        <div className="px-24 flex items-center">
          <div className="w-full max-w-xl mx-auto">
            <PrimaryHeadline className="mb-12">Kalkulator BAF</PrimaryHeadline>
            <SecondaryHeadline>
              Czym jest BAF i dlaczego jest ważny?
            </SecondaryHeadline>
            <Paragraph className="mb-6">
              Czym jest BAF i dlaczego jest ważny? BAF, czyli Wskaźnik
              Powierzchni Biopotu, to narzędzie, które pomaga nam mierzyć, ile
              przestrzeni w naszym mieście dedykujemy naturze. Wszystko, od
              zielonych dachów, po parki i ogrody, ma swój BAF. Im większy
              wskaźnik BAF, tym lepiej.
            </Paragraph>
            <SecondaryHeadline>Czym jest BAF dla Ciebie?</SecondaryHeadline>
            <Paragraph>
              Czystsze powietrze, mniejszy hałas, więcej cienia podczas upałów,
              schronienie dla lokalnej fauny i flory – to tylko niektóre z
              korzyści, które płyną z wyższego BAF. Dbając o BAF, dbamy o nasze
              miast, zdrowie i naszą przyszłość.
            </Paragraph>
            <Button as="link" href="/znajdz-dzialke" className="mt-12">
              Oblicz BAF
            </Button>
          </div>
        </div>
      </Row>
    </DefaultLayout>
  )
}
