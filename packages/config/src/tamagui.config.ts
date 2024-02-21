import { createFont, createTamagui, createTokens } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes/v2'
import { themes as tamaguiThemes } from '@tamagui/themes/v2-themes'
import { createMedia } from '@tamagui/react-native-media-driver'
import { createAnimations } from '@tamagui/animations-react-native'
import { animations } from '@my/ui/src/animations'

const myTokens = createTokens({
  ...tokens
})

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: "InterBold" },
  },
})

const myInterFont = createFont({
  family: 'Playfair Display, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 15,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: '300',
    6: '600',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
    800: { normal: 'InterBold', italic: 'InterBold-Italic' },
    900: { normal: 'InterBold', italic: 'InterBold-Italic' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      500: { normal: "InterBold" },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

const myAnimations = createAnimations({
  fast: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  '100ms': {
    type: 'timing',
    duration: 100,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1,
  },
  slow: {
    damping: 15,
    stiffness: 40,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
})



const myThemes = {
  dark: {
    background: '#333',
    color: '#fff',
  },
  darkGreen: {
    background: '#333',
    color: '#fff',
    accent: '#92fed1',
    accent2: '#ccffea',
  },
  light: {
    color: '#333',
    background: '#fff',
    backgroundPress: '#29eeb6',
    backgroundHover: '#137157'
  },
  f3: {
    color: '#333',
    background: '#f3f3f3',
  },
  f8: {
    color: '#333',
    background: '#f8f8f8',
  },
  yellow1: {
    color: '#511b6e',
    background: '#f7e78d',
  },
  lightblue1: {
    color: '#697291',
    background: '#cfeef8',
  },
  col1: {
    color: '#3308c0',
    background: '#ccd2e7',
  },
  ebb: {
    color: '#2b2b40',
    background: '#e6e0df',
  },
  carnation: {
    color: '#fa5b6b',
    background: '#204971',
  },
  leafDark: {
    accent: '#79B6B1',
    secondary: '#3D705B',
    primary: '#B4D0A8',
    background: '#B4D0A8',
    color: '#EFF5EC',
  },
  leafLight: {
    accent: '#4A8782',
    secondary: '#8fc1ac',
    primary: '#3A562E',
    background: '#F3F7F2',
    color: '#0E140B',
  },
  red: {
    color: '#383838',
    colorl1: '#383838',
    colorl2: '#555555',
    colorl4: '#a0a0a0',
    accentl1: '#fa5b6b',
    accentl4: '#fa8491',
    background: '#204971',
  },
  carnation2: {
    color: '#fd7481',
    background: '#204971',
  },
}



export const config = createTamagui({
  defaultFont: 'body',
  animations: myAnimations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  onlyAllowShorthands: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
    inter: myInterFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  themes: myThemes,
  tokens: myTokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

// for the compiler to find it
export default config
