import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AccessibilityBar } from '@/components/AccessibilityBar'
import { Calculator } from '@/components/calculator/Calculator'

export default function HomePage() {
  return (
    <main>
      {/*<AccessibilityBar />*/}
      {/*<section className="min-h-[50vh] bg-green-100 flex items-center justify-center py-16 px-8">*/}
      {/*  <Container>*/}
      {/*    <div className="text-center">*/}
      {/*      <h1 className="text-4xl font-bold">Kalkulator BAF</h1>*/}
      {/*      <p className="mt-2 mb-4">*/}
      {/*        Twoje ulubione narzędzie do zarządzania zieloną przestrzenią*/}
      {/*      </p>*/}
      {/*      <Button>Oblicz BAF</Button>*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</section>*/}
      {/*<section className="py-16 px-8">*/}
      {/*  <Container>*/}
      {/*    <h2 className="text-3xl font-bold">Wpisz numer działki</h2>*/}
      {/*  </Container>*/}
      {/*</section>*/}
      {/*<section className="py-16 px-8">*/}
      {/*  <Container>*/}
      {/*    <h2 className="text-3xl font-bold mb-4">Kalkulator</h2>*/}
      {/*    <Calculator />*/}
      {/*  </Container>*/}
      {/*</section>*/}
      {/*<section className="py-16 px-8">*/}
      {/*  <Container>*/}
      {/*    <h2 className="text-3xl font-bold">Zainspiruj się</h2>*/}
      {/*  </Container>*/}
      {/*</section>*/}
      {/*<footer className="py-16 px-8">*/}
      {/*  <Container>Stopka</Container>*/}
      {/*</footer>*/}
      <div className="flex h-screen">
        <div className="w-1/2 h-screen bg-red-200">lewo</div>
        <div className="w-1/2 h-screen bg-black snap-y snap-mandatory overflow-y-scroll text-white">
          <div className="snap-start h-screen text-4xl" id="1">
            1
          </div>
          <div className="snap-start h-screen text-4xl" id="2">
            2
          </div>
          <div className="snap-start h-screen text-4xl" id="3">
            3
          </div>
          <div className="snap-start h-screen text-4xl" id="4">
            4
          </div>
          <div className="snap-start h-screen text-4xl" id="5">
            5
          </div>
        </div>
      </div>
    </main>
  )
}
