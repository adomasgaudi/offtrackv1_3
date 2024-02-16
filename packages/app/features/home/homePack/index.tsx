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
        <Nav {...{ isScrolled, isHovered, setIsHovered }} onCatPress={() => sectionQuantumRef.current?.scrollIntoView({ behavior: 'smooth' })} />
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
          <YStack ref={sectionQuantumRef}></YStack>
          <SectionFakeArticle />
          <Theme name="f3">
            <SectionEdgarAlanPoe {...{ mobile }} />
          </Theme>
        </Layout1>
        <SectionBottom {...{ mobile }} />
      </YStack>
    </Theme>
  )
}
const MobileOld = () => {
  const { data, fetchData } = useOpenAI()
  const [inputValue, setInputValue] = useState('')
  const linkProps = (href) => useLink({ href })

  return (
    <Layout1>
      <YStack bg="$background">
        <XStack w="full" h={60} mb={20} bg="#019564" jc="center" ai="center">
          <P1 color="white" fontWeight="bold">
            Mobile View
          </P1>
        </XStack>

        {ARTICLES.map((article, index) => (
          <YStack key={index} mt={4} mb={10}>
            <Image
              source={{
                uri: article.image,
                width: '100%',
                height: 200,
              }}
              mb="$2"
              cursor="pointer"
              {...linkProps(article.link)}
            />
            <ArticleBoxSM>
              <YStack>
                <XStack gap={20}>
                  <H5>Research: 5A</H5>
                  <H5>Writing: 5A</H5>
                </XStack>
                <H2 mb="$2" cursor="pointer" {...linkProps(article.link)}>
                  {article.title[0]}
                </H2>
                <P1>{data ? data : article.text[0]}</P1>
                <XStack jc="center" ai="center" gap={3} mt={3}>
                  <Input
                    size="$2"
                    borderWidth={1}
                    borderColor="#cacaca"
                    outlineColor="none"
                    outlineWidth={0}
                    value={inputValue}
                    width="80%"
                    onChangeText={(text) => setInputValue(text)}
                  />
                  <Button onPress={() => fetchData(inputValue)}>Go!</Button>
                </XStack>
              </YStack>
            </ArticleBoxSM>
          </YStack>
        ))}
      </YStack>
    </Layout1>
  )
}

export function HomePack() {
  const media = useMedia()
  console.log(media)
  return <Desktop mobile={media.xs} xs={media.xs} />
}

export default HomePack
