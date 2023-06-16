import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AccessibilityBar } from '@/components/AccessibilityBar'

export default function HomePage() {
  return (
    <main>
      <AccessibilityBar />
      <section className="min-h-[50vh] bg-green-100 flex items-center justify-center py-16 px-8">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Kalkulator BAF</h1>
            <p className="mt-2 mb-4">
              Twoje ulubione narzędzie do zarządzania zieloną przestrzenią
            </p>
            <Button>Oblicz BAF</Button>
          </div>
        </Container>
      </section>
      <section className="py-16 px-8">
        <Container>Czym jest Biotope Area Factor?</Container>
      </section>
      <section className="py-16 px-8">
        <Container>Wpisz adres działki</Container>
      </section>
      <footer className="py-16 px-8">
        <Container>Stopka</Container>
      </footer>
    </main>
  )
}
