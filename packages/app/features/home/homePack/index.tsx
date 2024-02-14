import { createRef, useEffect, useState } from 'react'
import { H2, H5, YStack, XStack, Button, Image, Input, Theme, useMedia, H1 } from '@my/ui'
import { Layout1, P1, ArticleBoxSM, P2 } from './components'

import { useLink } from 'solito/link'
import useOpenAI from './useOpenai'
import ARTICLES from './constantsARTICLES'
import { Nav, SectionBottom, SectionFakeArticle, SectionGreen, SectionTopText } from './sections'
import { SectionArticle } from './sectionArticle'
import { Atom, Cat, CodeSquare, X } from '@tamagui/lucide-icons'
import { Analytics } from '@vercel/analytics/react';

// Desktop version component
const sectionRef = createRef()
const Desktop = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Theme name="f3">
      <YStack bg="white">
      <Analytics />
        <XStack
          w="100%"
          h={60}
          bg="#019564"
          jc="flex-start"
          ai="center"
          gap={200}
          position="fixed"
          top={isScrolled ? 0 : 'auto'}
          opacity={isScrolled ? 1 : 0}
          scaleY={isScrolled ? 1 : 0}
          zIndex={10}
          animation="fast"
        >
          <XStack maxWidth={800} width={800} m="auto" gap={40}>
            <YStack ai="center" hoverStyle={{ opacity: 0 }} x={isScrolled ? 0 : -40} animation="slow">
              <Atom />
              <P2 color="white">Physics</P2>
            </YStack>
            <YStack
              ai="center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              x={isScrolled ? 0 : -40}
              animation="slow"
            >
              <CodeSquare color={isHovered ? '#94ff94' : 'white'} animation="slow" />
              <P2 color={isHovered ? '#9aff9a' : 'white'} animation="slow">
                Code
              </P2>
            </YStack>
            <YStack ai="center" position="relative" x={isScrolled ? 0 : -40} animation="slow">
              <Cat />
              <P2 color="white">Quantum</P2>
              <YStack
                ai="center"
                position="absolute"
                x={0}
                hoverStyle={{ x: 10}}
                animation="slow"
              >
                <Cat  />
                <P2 color="white">Quantum</P2>
              </YStack>
            </YStack>
          </XStack>
        </XStack> 
      
        {/* nav end  */}
        <SectionTopText
          onPress={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <YStack ref={sectionRef}></YStack>
        <Layout1>
          {ARTICLES.map((article, index) => (
            <SectionArticle
              {...{
                isLastItem: index === ARTICLES.length - 1,
                isFirstItem: index === 0,
                index,
                article,
              }}
            />
          ))}
          <SectionFakeArticle />
          <Theme name="f3">
            <SectionGreen></SectionGreen>
          </Theme>
        </Layout1>
        <SectionBottom />
      </YStack>
    </Theme>
  )
}

const Mobile = () => {
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
                <XStack>
                  {/* <TooltipButton
                    placement="top"
                    Trigger={() => (
                      <Button
                        bg="none"
                        hoverStyle={{ bg: '$background' }}
                        icon={<Sparkles />}
                        circular
                        onPress={() => fetchData(`summarise  ${article.text[0]}`)}
                      >
                        Simplify
                      </Button>
                    )}
                    tooltipText="ChatGPT summary"
                  /> */}
                  {/* <TooltipButton
                    placement="top"
                    Trigger={
                      <Button
                        bg="none"
                        hoverStyle={{ bg: '$background' }}
                        icon={<Sparkles />}
                        circular
                        onPress={() => fetchData(`summarise like I'm 5: ${article.text[0]}`)}
                      >
                        Simplify
                      </Button>
                    }
                    tooltipText="ChatGPT summary for dummies"
                  /> */}
                </XStack>
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
  return <>{media.sm ? <Mobile /> : <Desktop />}</>
}

export default HomePack
