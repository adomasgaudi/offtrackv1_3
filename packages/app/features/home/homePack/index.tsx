import React, { useEffect, useState } from 'react'
import {
  H1,
  H2,
  H5,
  YStack,
  XStack,
  Button,
  Image,
  Input,
  Theme,
  TooltipGroup,
  Tooltip,
  useMedia,
  Spinner,
} from '@my/ui'
import {
  ArticleBox,
  Layout1,
  LayoutLeft,
  InsetShadow,
  P1,
  P2,
  ArticleBoxSM,
  TooltipButton,
} from './components'

import { useLink } from 'solito/link'
import {
  ArrowBigRight,
  BrainCircuit,
  MessageCircleQuestion,
  Share2,
  Sparkle,
  Sparkles,
} from '@tamagui/lucide-icons'
import useOpenAI from './useOpenai'
import ARTICLES from './articlesOBJ'






const myBoxShadow1 = '0px 0px 1px hsla(0, 0%, 0%, 0.025), 0px 0px 2px hsla(0, 0%, 0%, 0.025)'

// Desktop version component
const Desktop = () => {
  const { data, fetchData, isLoading } = useOpenAI()
  useEffect(() => {
    console.log('isLoading!!!:', isLoading)
  }, [isLoading])
  const [inputValue, setInputValue] = useState('')
  const linkProps = (href) => useLink({ href })

  return (
    <Theme name="f8">
      <YStack bg="$background">
        <XStack w="full" h={60} mb={50} bg="#019564" jc="flex-start" ai="center" gap={200}>
          <XStack maxWidth={800} width={800} m="auto" gap={50}>
            <P1 color="white" fontWeight="bold">
              Made in China, not
            </P1>
          </XStack>
        </XStack>

        <LayoutLeft bg="$background">
          <H2>Que</H2>
          <P2>Exoplanet within 10ly post </P2>
          <P2>Stars for beginners</P2>
          <P2>Interstellar travel - Python project </P2>
          <P2>Quantum Mechanics - Python & qiskit project </P2>
          <P2>Front-end Frameworks </P2>
          <P2>CSS primitives </P2>
        </LayoutLeft>

        <Layout1>
          {ARTICLES.map((article, index) => {
            const isLastItem = index === ARTICLES.length - 1
            const isFirstItem = index === 0
            return (
              <YStack key={index} mt={isFirstItem ? 200 : 6} mb={isLastItem ? 200 : 100}>
                <Image
                  source={{
                    uri: article.image,
                    width: '100%',
                    height: 300,
                  }}
                  mb="$4"
                  cursor="pointer"
                  {...linkProps(article.link)}
                />
                <Theme name="light2">
                  <ArticleBox>
                    <YStack>
                      <XStack jc="space-between">
                        <XStack gap={20}>
                          <H5>Research: some</H5>
                          <H5>Writing: meh</H5>
                        </XStack>
                        <XStack>
                          <TooltipButton
                            groupId="1"
                            placement="top"
                            Trigger={() => (
                              <Button
                                bg="none"
                                hoverStyle={{ bg: '$background' }}
                                icon={<Share2 />}
                                circular
                              ></Button>
                            )}
                            tooltipText="I'm not responsible for you anoying anyone with this (just copy url)"
                          />
                        </XStack>
                      </XStack>
                      <H2 mb="$4" cursor="pointer" {...linkProps(article.link)}>
                        {article.title[0]}
                      </H2>
                      <XStack gap={15}>
                        <YStack gap={5}>
                          <TooltipButton
                            groupId="1"
                            placement="right"
                            Trigger={() => (
                              <Button
                                bg="none"
                                hoverStyle={{ bg: '$background' }}
                                icon={<MessageCircleQuestion />}
                                circular
                                onPress={() =>
                                  fetchData(`summarise in 5 sentences: ${article.text[0]}`)
                                }
                              ></Button>
                            )}
                            tooltipText="Summarise the whole article"
                          />
                        </YStack>
                        {isLoading ? (
                          <XStack jc="center" ai="center" h={200} f={1}>
                            <Spinner />
                          </XStack>
                        ) : (
                          <P1 mb={10}>{data ? data : article.text[0]}</P1>
                        )}
                      </XStack>
                      <XStack jc="center" ai="center" gap={5}>
                        <Input
                          size="$3"
                          borderWidth={1}
                          borderColor="#cacaca"
                          outlineColor="none"
                          outlineWidth={0}
                          placeholder="what is a... ?"
                          value={inputValue}
                          width="100%"
                          onChangeText={(text) => setInputValue(text)}
                        />
                        <Button
                          onPress={() => fetchData(inputValue)}
                          icon={ArrowBigRight}
                          size="$3"
                        ></Button>
                        <Button
                          onPress={() => fetchData(`explain quarks in 5 sentences`)}
                          size="$3"
                        >
                          What's a quark?
                        </Button>
                      </XStack>
                    </YStack>
                  </ArticleBox>
                </Theme>
              </YStack>
            )
          })}
          <YStack mb={200} borderRadius="10px" p={10} mt="$10" boxShadow={myBoxShadow1}>
            <InsetShadow>Writing... </InsetShadow>
            <InsetShadow>Quantum mechanics post </InsetShadow>
          </YStack>
        </Layout1>
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
                  <TooltipButton
                    groupId="1"
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
                  />
                  <TooltipButton
                    groupId="1"
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
                  />
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


export function Pack() {
  const media = useMedia()
  return <>{media.sm ? <Mobile /> : <Desktop />}</>
}

export default Pack
