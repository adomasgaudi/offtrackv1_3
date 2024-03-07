import { H1, Theme, YStack } from '@my/ui'
import { useState } from 'react'
import { LoadingWrapper } from "./sections/loading";
import {SVGDarkPaper, SVGPaper, SVGWrap} from './Svgs'

export function HomePack() {
  const colorsLight = ['#fff8f8', '#ebebeb00', '#f7f7f7', '#e2e2e200']
  const colorsDark = ['#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a']
  const colorsP = (isDark) => ({
    color1: isDark ? colorsDark[0] : colorsLight[0],
    color2: isDark ? colorsDark[1] : colorsLight[1],
    color3: isDark ? colorsDark[2] : colorsLight[2],
    color4: isDark ? colorsDark[3] : colorsLight[3],
  })
  const [isDark, setIsDark] = useState(false)
  const handleChangeTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <LoadingWrapper>
      <Theme name={isDark ? "leafDark" : "leafLight"}>
        <YStack minHeight="100vh">
          <SVGWrap
            SVG={isDark ? SVGDarkPaper : SVGPaper}
            w="100%"
            h="100%"
            minHeight="100vh"
            {...colorsP(isDark)}
          >
            <YStack>
              <H1>hello muthafaka</H1>
              <button onPress={ () => setIsDark((x) => !x) }>dark</button>
            </YStack>
          </SVGWrap>
        </YStack>
      </Theme>
    </LoadingWrapper>
  )
}




