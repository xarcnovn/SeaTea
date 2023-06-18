export const Logo = () => {
  return (
    <svg
      className="w-20"
      viewBox="0 0 287 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_73_1074)">
        <path
          d="M177.355 37.0671C197.434 16.9883 229.988 16.9883 250.067 37.0671L251.067 38.0677C270.593 57.5939 270.593 89.2522 251.067 108.778V108.778C231.541 128.305 199.883 128.305 180.357 108.778L143 71.4219L177.355 37.0671Z"
          stroke="url(#paint0_linear_73_1074)"
          stroke-width="20"
        />
        <path
          d="M109.068 107.067C88.989 127.145 56.4348 127.145 36.356 107.067L35.3554 106.066C15.8291 86.5398 15.8291 54.8816 35.3553 35.3553V35.3553C54.8815 15.8291 86.5398 15.8291 106.066 35.3553L143.423 72.7119L109.068 107.067Z"
          stroke="url(#paint1_linear_73_1074)"
          stroke-width="20"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_73_1074"
          x="-4"
          y="0"
          width="294.423"
          height="152.134"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_73_1074"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_73_1074"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_73_1074"
          x1="160"
          y1="72.7112"
          x2="265"
          y2="72.7112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BACA40" />
          <stop offset="1" stop-color="#0D53BC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_73_1074"
          x1="128.5"
          y1="71.7112"
          x2="-3"
          y2="71.7112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BACA40" />
          <stop offset="1" stop-color="#506D12" />
        </linearGradient>
      </defs>
    </svg>
  )
}
