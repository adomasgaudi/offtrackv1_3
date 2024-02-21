import { Theme, YStack } from '@my/ui'

import { SectionFoot, SectionMain, SectionTop } from './sectionsv2'
import { SVGDarkPaper, SVGPaper, SVGWrap } from './partsv2/svgs'
import { LoadingWrapper } from './partsv2/loading'
import { useState } from 'react'

const ArticleStars2v2 = () => {
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
              <SectionTop {...{handleChangeTheme}}/>
              <SectionMain />
              <SectionFoot />
            </YStack>
          </SVGWrap>
        </YStack>
      </Theme>
    </LoadingWrapper>
  )
}

export default ArticleStars2v2
