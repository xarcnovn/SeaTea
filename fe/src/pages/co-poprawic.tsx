import { DefaultLayout } from '@/components/DefaultLayout'
import { Paragraph, PrimaryHeadline } from '@/components/Typography'
import { Row } from '@/components/Row'
import { BackgroundColumn } from '@/components/BackgroundColumn'
import { Button } from '@/components/Button/Button'

export default function Improvements() {
  return (
    <DefaultLayout>
      <Row className="grid-cols-2">
        <div className="p-24 flex items-center">
          <div className="w-full max-w-xl mx-auto">
            <PrimaryHeadline className="mb-2">
              Jak poprawić BAF na Twojej działce?
            </PrimaryHeadline>
            <Paragraph>
              Poniżej znajdziesz kilka sugestii nt. tego co możesz zrobić, aby
              poprawic wskaźnik BAF na Twojej działce.
            </Paragraph>
            <ol className="mt-12 space-y-4">
              <li>
                Utwórz owadniki: Umieść na swojej działce specjalne domki dla
                owadów, takie jak hotele dla owadów lub ule dla dzikich pszczół.
                Zapewnisz w ten sposób schronienie dla owadów zapylających,
                które odgrywają kluczową rolę w procesie zapylania roślin.
              </li>
              <li>
                Stwórz oczko wodne: Jeśli masz na działce miejsce na małe oczko
                wodne, zbuduj je. Oczka wodne przyciągają różnorodne gatunki
                ptaków, owadów i płazów. Zadbaj o roślinność wokół oczka
                wodnego, aby zapewnić dodatkowe siedliska dla organizmów
                wodnych.
              </li>
              <li>
                Sadź rodzime rośliny: Wybieraj rodzime gatunki roślin, które są
                dostosowane do lokalnych warunków i służą jako pożywienie i
                schronienie dla miejscowej fauny. Unikaj gatunków inwazyjnych,
                które mogą zagrozić ekosystemowi.
              </li>
              <li>
                Ogranicz stosowanie pestycydów: Staraj się minimalizować
                używanie pestycydów na swojej działce. Pestycydy mogą być
                szkodliwe dla owadów, ptaków i innych organizmów. Zamiast tego,
                zastosuj naturalne metody kontroli szkodników, takie jak
                sadzenie roślin odstraszających owady szkodniki.
              </li>
              <li>
                Stwórz skalniak: Jeśli masz miejsce na skalniak, wykorzystaj go
                jako siedlisko dla roślin skalnych i kserofitów. Te rośliny są
                odporne na suszę i przyciągają owady, takie jak motyle i
                biedronki.
              </li>
              <li>
                Pamiętaj, że poprawa biotopu na działce to proces, który wymaga
                cierpliwości i ciągłej troski. Możesz stopniowo wprowadzać te
                zmiany i obserwować, jakie efekty przynoszą dla różnorodności
                biologicznej na Twojej działce.
              </li>
            </ol>
            <p className="my-10">
              Pamiętaj, że poprawa biotopu na działce to proces, który wymaga
              cierpliwości i ciągłej troski. Możesz stopniowo wprowadzać te
              zmiany i obserwować, jakie efekty przynoszą dla różnorodności
              biologicznej na Twojej działce.
            </p>
            <Button as="link" href="/zainspiruj-sie">
              Zainspiru się
            </Button>
          </div>
        </div>
        <BackgroundColumn bgClassName="bg-improvements" />
      </Row>
      <div className="flex"></div>
    </DefaultLayout>
  )
}
