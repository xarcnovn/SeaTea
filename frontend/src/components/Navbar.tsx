import { Logo } from './Logo'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export const Navbar = () => {
  return (
    <nav className="bg-white flex items-center py-4 fixed top-0 left-0 right-0 px-16 border-b shadow z-10">
      <Logo />
      <div className="ml-1">
        <p className="font-semibold leading-4">Bafalizer</p>
        <p className="leading-4">Pro</p>
      </div>
      <div className="ml-auto flex gap-4 items-center">
        <div className="flex items-center">
          <span className="text-sm mr-2">Jan Kowalski</span>
          <UserCircleIcon className="w-10 h-10" />
        </div>
        <ArrowRightOnRectangleIcon className="w-8 h-8" />
      </div>
    </nav>
  )
}
