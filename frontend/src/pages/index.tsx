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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
