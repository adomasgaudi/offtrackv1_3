import { createRef, useEffect, useState } from 'react'
import { H2, H5, YStack, XStack, Button, Image, Input, Theme, useMedia, H1 } from '@my/ui'
import { Layout1, P1, ArticleBoxSM, P2 } from './components'

import { useLink } from 'solito/link'
import useOpenAI, { useScroll } from './useHooks'
import ARTICLES from './constantsARTICLES'
import {
  Nav,
  SectionBottom,
  SectionFakeArticle,
  SectionEdgarAlanPoe,
  SectionTopText,
} from './sections'
import { SectionArticle } from './sections/sectionArticle'
import { Analytics } from '@vercel/analytics/react'
import Spline from '@splinetool/react-spline'

// Desktop version component
const sectionRef = createRef()
const sectionQuantumRef = createRef()
const Desktop = ({ mobile, xs }) => {
  const isScrolled = useScroll(500)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Theme name="f3">
      <YStack bg="white">
        <Analytics />
        <Nav
          {...{ isScrolled, isHovered, setIsHovered }}
          onCatPress={() => sectionQuantumRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <SectionTopText
          {...{ mobile, xs }}
          onPress={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <YStack ref={sectionRef}></YStack>
        <Layout1>
          {ARTICLES.map((article, index) => (
            <SectionArticle
              key={index}
              {...{
                isLastItem: index === ARTICLES.length - 1,
                isFirstItem: index === 0,
                index,
                article,
                mobile,
              }}
            />
          ))}
          <YStack ref={sectionQuantumRef} w="100%" maxWidth={800}>
            <SectionFakeArticle />
          </YStack>
          <Theme name="f3">
            <SectionEdgarAlanPoe {...{ mobile }} />
          </Theme>
        </Layout1>
        <SectionBottom {...{ mobile }} />
      </YStack>
    </Theme>
  )
}

export function HomePack() {
  const media = useMedia()
  console.log(media)
  return <Desktop mobile={media.xs} xs={media.xs} />
}

export default HomePack
