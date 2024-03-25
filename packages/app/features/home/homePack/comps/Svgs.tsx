import { View, YStack } from '@my/ui'

export const GrainyFractalNoise = () => (
  <svg viewBox="0 0 100% 100%" width="100%" height="100%" opacity="0.5">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
)

export const SVG1 = ({ color1, color2 }) => (
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
        <stop stopColor={color1} stopOpacity="1" offset="0%"></stop>
        <stop stopColor={color2} stopOpacity="1" offset="100%"></stop>
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

export const SVGPaper = ({ color1, color2, color3, color4 }) => {
  const stopColor1 = color1 || 'hsla(56, 14%, 81%, 1.00)'
  const stopColor2 = color2 || 'rgba(255,255,255,0)'
  const stopColor3 = color3 || 'hsl(0, 0%, 78%)'
  const stopColor4 = color4 || 'rgba(255,255,255,0)'
  const grainColor = color1 || 'hsla(128, 70%, 41%, 1)'
  return (
    <svg version="1.1" viewBox="0 0 100% 100%" width="100%" height="100%">
      <defs>
        <linearGradient
          gradientTransform="rotate(-150, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gggrain-gradient2"
        >
          <stop stopColor={stopColor1} stopOpacity="1" offset="-0%"></stop>
          <stop stopColor={stopColor2} stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          gradientTransform="rotate(350, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gggrain-gradient3"
        >
          <stop stopColor={stopColor3} stopOpacity="1"></stop>
          <stop stopColor={stopColor4} stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <filter
          id="gggrain-filter"
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
            baseFrequency="0.8"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feColorMatrix
            type="saturate"
            values="0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="colormatrix"
          ></feColorMatrix>
          <feComponentTransfer
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="colormatrix"
            result="componentTransfer"
          >
            <feFuncR type="linear" slope="3"></feFuncR>
            <feFuncG type="linear" slope="3"></feFuncG>
            <feFuncB type="linear" slope="3"></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="componentTransfer"
            result="colormatrix2"
            type="matrix"
            values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 19 -11"
          ></feColorMatrix>
        </filter>
      </defs>
      <g>
        <rect width="100%" height="100%" fill={grainColor}></rect>
        <rect width="100%" height="100%" fill="url(#gggrain-gradient3)"></rect>
        <rect width="100%" height="100%" fill="url(#gggrain-gradient2)"></rect>
        <rect
          width="100%"
          height="100%"
          fill="#c92323fa"
          filter="url(#gggrain-filter)"
          opacity="1"
        // style=""
        ></rect>
      </g>
    </svg>
  )
}
export const SVGDarkPaper = ({ color1, color2, color3, color4 }) => {
  const stopColor1 = color1 || "#505050"
  const stopColor2 = color2 || "#090D08"
  const stopColor3 = color3 || 'hsl(0, 0%, 78%)'
  const stopColor4 = color4 || 'rgba(255,255,255,0)'
  const grainColor = color1 || 'hsla(128, 70%, 41%, 1)'
  // "#090D08"
  // #505050
  return (
    <svg
      version="1.1"
      viewBox="0 0 100% 100%"
      width="100%"
      height="100%"
      opacity="1"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.2"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="6"
            specularConstant="1.5"
            specularExponent="20"
            lightingColor={stopColor1}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="85"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill={stopColor2}></rect>
      <rect width="100%" height="100%" fill={stopColor1} filter="url(#nnnoise-filter)"></rect>
    </svg>
  )
}

export const SVGWrap = ({ children, color1, color2, color3, color4, SVG, ...props }: any) => (
  <View position="relative" {...props}>
    <View position="absolute" w="100%" h="100%" top="0" left="0">
      <SVG {...{ color1, color2, color3, color4 }} />
    </View>
    <View zIndex={1}>{children}</View>
  </View>
)

export const SVGSplatCircle = () => (
  <svg width="200" height="200" viewBox="0 0 220 220">
    <filter id="displacementFilter">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
      <feDisplacementMap
        in2="turbulence"
        in="SourceGraphic"
        scale="50"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>

    <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
  </svg>
)




export const myThemes = {
  dark: {
    background: '#333',
    color: '#fff',
  },
  light: {
    color: '#333',
    background: '#fff',
  },
  light2: {
    color: '#333',
    background: '#f3f3f3',
  },
  leafDark: {
    accent: '#79B6B1',
    secondary: '#3D705B',
    primary: '#B4D0A8',
    background: '#090D08',
    faint: '#131b12',
    color: '#EFF5EC',
  },
  leafLight: {
    accent: '#4A8782',
    secondary: '#8fc1ac',
    primary: '#3A562E',
    background: '#F3F7F2',
    faint: '#e8ebe7',
    color: '#0E140B',
  },
  yellowLight: {
    accent: '#e8ca5c',
    secondary: '#e1cf8e',
    primary: '#b8a253',
    background: '#faf9f7',
    faint: '#e8ebe7',
    color: '#0c0c0b',
  },
  yellowDark: {
    accent: "#a18317",
    secondary: "#715f1e",
    primary: "#ae9847",
    background: "#090806",
    faint: "#131b12",
    color: "#f3f3f2",
  },
}

export const THEME_COLORS = [
  ['yellowLight', 'yellowDark'],
  ['leafLight', 'leafDark'],
]

export const svgColorsPrimary = (themenum) => ({
  light: [myThemes[THEME_COLORS[themenum][0]].background, '#ebebeb00', '#f7f7f7', '#e2e2e200'],
  dark: ['#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a']
})
export const svgColorsBasic = (themenum) => ({
  light: [myThemes[THEME_COLORS[themenum][0]].color, '#ebebeb00', '#f7f7f7', '#e2e2e200'],
  dark: ['#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a']
})


export const colorsP = (isDark, themeNum, svgColors) => {
  const selectedColors = isDark ? svgColors(themeNum).dark : svgColors(themeNum).light;
  return {
    color1: selectedColors[0],
    color2: selectedColors[1],
    color3: selectedColors[2],
    color4: selectedColors[3],
  }
}




export const SVGWrapFull = ({ children, isDark, themeNum }) => {
  return (
    <SVGWrap
      SVG={isDark ? SVGDarkPaper : SVGPaper}
      w="100%"
      h="100%"
      minHeight="100vh"
      {...colorsP(isDark, themeNum, svgColorsPrimary)}
    >
      {children}
    </SVGWrap>
  )
}

export const SVGCard = ({ children, isDark, themenum }) => {

  return (

    <SVGWrap
      SVG={isDark ? SVGDarkPaper : SVGPaper}
      w="100%"
      h="100%"
      borderRadius="20px"
      overflow="hidden"
      p={20}
      {...colorsP(!isDark, themenum, svgColorsBasic)}
    >
      {children}
    </SVGWrap>
  )
}


export const SVGShape1 = () => {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 600 600">
      <path
        d="M166.9456024169922,281.9560546875C166.68409729003906,325.1045913696289,178.97489166259766,384.59727986653644,219.50836181640625,403.5564880371094C260.04183197021484,422.5156962076823,369.6129506429036,423.1694641113281,410.14642333984375,395.7113037109375C450.6798960367839,368.2531433105469,471.7311604817708,281.82530975341797,462.7091979980469,238.80752563476562C453.68723551432294,195.78974151611328,396.286616007487,153.29497528076172,356.0146484375,137.60459899902344C315.742680867513,121.91422271728516,252.58890024820963,120.60669199625652,221.077392578125,144.66526794433594C189.56588490804037,168.72384389241537,167.2071075439453,238.8075180053711,166.9456024169922,281.9560546875C166.68409729003906,325.1045913696289,178.97489166259766,384.59727986653644,219.50836181640625,403.5564880371094"
        fill="url(&quot;#SvgjsLinearGradient1000&quot;)"
        stroke-width="2"
        stroke="hsl(340, 45%, 30%)"></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1000"><stop stop-color="hsl(37, 99%, 67%)" offset="0">
        </stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
        </linearGradient>
        <radialGradient id="SvgjsRadialGradient1001"><stop stop-color="hsl(340, 45%, 50%)" offset="0"></stop><stop stop-color="hsl(340, 45%, 80%)" offset="1"></stop>
        </radialGradient>
      </defs>
    </svg>
  )
}