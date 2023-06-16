import type { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl w-full mx-auto">{children}</div>
}
