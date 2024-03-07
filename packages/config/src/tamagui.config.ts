import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes/v2'
import { themes as tamaguiThemes } from '@tamagui/themes/v2-themes'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from '@my/ui/src/animations'

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
    700: { normal: 'InterBold' },
  },
})




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
    color33: '#cacfc8',
  },
  leafLight: {
    accent: '#4A8782',
    secondary: '#8fc1ac',
    primary: '#3A562E',
    background: '#F3F7F2',
    faint: '#e8ebe7',
    color: '#0E140B',
    color33:'#22311b',
  },
  yellowLight: {
    accent: '#e8ca5c',
    secondary: '#e1cf8e',
    primary: '#b8a253',
    background: '#faf9f7',
    faint: '#e8ebe7',
    color: '#0c0c0b',
    color33: '#32322e',
  },
  yellowDark: {
    accent: "#a18317",
    secondary: "#715f1e",
    primary: "#ae9847",
    background: "#090806",
    faint: "#131b12",
    color: "#f3f3f2",
    color33: '#dadad8',
  },
}

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  onlyAllowShorthands: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  themes: myThemes,
  tokens,
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
