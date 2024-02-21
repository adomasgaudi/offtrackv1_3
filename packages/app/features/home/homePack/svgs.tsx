export const GrainyFractalNoise = () => (
  <svg viewBox="0 0 100% 100%" width="100%" height="100%" opacity="0.5">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
)

export const GrayBlur = () => (
  <svg version="1.1" opacity="1" viewBox="0 0 100% 100%" width="100%" height="100%">
    <defs>
      <linearGradient
        gradientTransform="rotate(200, 0.5, 0.5)"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="ffflux-gradient"
      >
        <stop stopColor="hsl(0, 0%, 1%)" stopOpacity="1" offset="0%"></stop>
        <stop stopColor="hsl(0, 0%, 10%)" stopOpacity="1" offset="100%"></stop>
      </linearGradient>
      <filter
        id="ffflux-filter"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.004 0.004"
          numOctaves="1"
          seed="64"
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          result="turbulence"
        ></feTurbulence>
        <feGaussianBlur
          stdDeviation="100 100"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="turbulence"
          edgeMode="duplicate"
          result="blur"
        ></feGaussianBlur>
        <feBlend
          mode="saturation"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          in2="blur"
          result="blend"
        ></feBlend>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)" />
  </svg>
)

// export const SplatCircle = () => (
//   <svg width="200" height="200" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
//     <filter id="displacementFilter">
//       <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
//       <feDisplacementMap
//         in2="turbulence"
//         in="SourceGraphic"
//         scale="50"
//         xChannelSelector="R"
//         yChannelSelector="G"
//       />
//     </filter>

//     <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
//   </svg>
// )
