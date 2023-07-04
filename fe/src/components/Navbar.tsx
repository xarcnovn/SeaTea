import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex items-center h-20 fixed z-10 top-0 left-0 w-full border shadow px-8 bg-white">
      <div className="flex items-center gap-2">
        <svg
          width="64"
          height="32"
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.6292 8.2295C44.1157 3.77168 51.3899 3.77168 55.8764 8.2295L56.1 8.45165C60.463 12.7868 60.463 19.8154 56.1 24.1506V24.1506C51.7369 28.4857 44.663 28.4857 40.3 24.1506L31.9528 15.8568L39.6292 8.2295Z"
            stroke="url(#paint0_linear_70_709)"
            strokeWidth="8"
          />
          <path
            d="M24.3708 23.7705C19.8843 28.2283 12.6101 28.2283 8.1236 23.7705L7.90001 23.5483C3.53696 19.2132 3.53696 12.1846 7.90001 7.84944V7.84944C12.2631 3.51431 19.337 3.51431 23.7 7.84944L32.0472 16.1432L24.3708 23.7705Z"
            stroke="url(#paint1_linear_70_709)"
            strokeWidth="8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_70_709"
              x1="35.7514"
              y1="16.143"
              x2="59.2132"
              y2="16.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BACA40" />
              <stop offset="1" stopColor="#0D53BC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_70_709"
              x1="28.7128"
              y1="15.921"
              x2="-0.670333"
              y2="15.921"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BACA40" />
              <stop offset="1" stopColor="#506D12" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <p className="font-bold text-xl leading-none">BAF</p>
          <p className="leading-none text-sm">Kalkulator</p>
        </div>
      </div>
      <ul className="flex gap-x-6 ml-auto">
        <Link href="/">Strona główna</Link>
        <Link href="/znajdz-dzialke">Kalkulator</Link>
        <Link href="/zainspiruj-sie">Zainspiruj się</Link>
      </ul>
    </nav>
  )
}
