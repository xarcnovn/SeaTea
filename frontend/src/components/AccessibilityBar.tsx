import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'

export const AccessibilityBar = () => {
  const [html, setHtml] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setHtml(document.querySelector('html'))
  }, [])

  const setHtmlFontSize = (size: number) => {
    if (!html) return
    html.style.fontSize = `${size}px`
  }

  const setHtmlContrast = (contrast: string) => {
    if (!html) return
    html.style.filter = `${contrast}`
  }

  return (
    <section className="py-3 px-8 bg-white">
      <Container>
        <div className="flex font-bold">
          <div className="flex gap-2">
            <p>Powiększ czcionkę strony:</p>
            <button
              className="border border-gray-500 px-2 h-6 flex items-center justify-center"
              onClick={() => setHtmlFontSize(16)}
            >
              A
            </button>
            <button
              className="border border-gray-500 px-2 h-6 flex items-center justify-center"
              onClick={() => setHtmlFontSize(17)}
            >
              A+
            </button>
            <button
              className="border border-gray-500 px-2 h-6 flex items-center justify-center"
              onClick={() => setHtmlFontSize(18)}
            >
              A++
            </button>
          </div>
          <div className="flex gap-2 ml-4">
            <p>Kontrast:</p>
            <button
              className="border border-gray-500 px-2 h-6 flex items-center justify-center"
              onClick={() => setHtmlContrast('')}
            >
              A
            </button>
            <button
              className="border border-gray-500 px-2 h-6 flex items-center justify-center bg-gray-900 text-yellow-400"
              onClick={() => setHtmlContrast('invert(1) contrast(1.5)')}
            >
              A
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
