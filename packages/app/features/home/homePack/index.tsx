import { Button, H1, Theme, XStack, YStack } from '@my/ui'
import { useState } from 'react'
import { LoadingWrapper } from "./auxilary/loading";
import { SVGWrapFull, THEME_COLORS } from './comps/Svgs'
import { SectionNav, SectionTop } from './sections';


export function HomePack() {

  const [isDark, setIsDark] = useState(false)
  const [themeNum, setThemeNum] = useState(0)

  const handleThemeChange = () => { setIsDark((x) => !x) }
  const handleColorChange = () => {
    setThemeNum(prev => (prev + 1) % THEME_COLORS.length);
  }
  const themeName = THEME_COLORS[themeNum]


  return (
    <LoadingWrapper>
      <Theme name={isDark ? themeName[1] : themeName[0]}>
        <YStack minHeight="100vh">
          <SVGWrapFull {...{ isDark, themenum: themeNum }}>
            <SectionNav {...{handleColorChange, handleThemeChange}} />
            <SectionTop {...{isDark}} />
          </SVGWrapFull>
        </YStack>
      </Theme>
    </LoadingWrapper>
  )
}




