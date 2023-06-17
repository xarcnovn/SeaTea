import { ReactNode } from 'react'

export const Slide = ({ children }: { children: ReactNode }) => {
  return (
    <div className="snap-start h-screen p-12">
      <div className="h-full flex items-center">
        <div className="w-full border border-gray-200 rounded-md p-12 shadow bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}
