import { Button } from '@/components/Button'

export default function HomePage() {
  return (
    <main>
      <div className="flex">
        <div className="w-1/2 bg-main min-h-screen" />
        <div className="w-1/2 p-16">
          <h1 className="text-4xl font-bold mb-24">Kalkulator BAF</h1>
          <h2 className="text-xl font-bold">Czym jest BAF?</h2>
          <p>
            BAF (Biotope Area Factor) to wskaźnik, który mierzy aktywność
            biotopu danego obszaru na podstawie powierzchni zajmowanej przez
            różne typy terenów. Ocenia się go na podstawie przepuszczalności
            terenu dla wody oraz rodzaju roślinności, takich jak drzewa, trawa,
            dachy zielone czy łąki kwietne. Im wyższy BAF, tym większa
            różnorodność biologiczna i zdolność do utrzymania ekosystemów.
          </p>
          <h2 className="text-xl font-bold mt-16">
            BAF - kiedy jest potrzebny?
          </h2>
          <div className="mb-16">
            <p>Chcesz dostać pozwolenie na budowe?</p>
            <p>Chcesz sprawdzić czy inwestor przestrzega prawa?</p>
            <p>Chcesz żyć w lepszym mieście?</p>
          </div>
          <Button isLink href="/oblicz_baf">
            Oblicz teraz!
          </Button>
        </div>
      </div>
    </main>
  )
}
