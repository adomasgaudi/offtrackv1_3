import { useEffect, useState } from 'react'
import {
  H2,
  H5,
  YStack,
  XStack,
  Button,
  Image,
  Input,
  Theme,
  useMedia,
} from '@my/ui'
import {
  Layout1,
  P1,
  ArticleBoxSM,
} from './components'

import { useLink } from 'solito/link'
import useOpenAI from './useOpenai'
import ARTICLES from './articlesOBJ'
import {
  Nav,
  SectionBottom,
  SectionFakeArticle,
  SectionGreen,
  SectionTopText,
} from './sections'
import { SectionArticle } from './sectionArticle'

// Desktop version component
const Desktop = () => {
  const { data, fetchData, isLoading } = useOpenAI()
  useEffect(() => {
    console.log('isLoading!!!:', isLoading)
  }, [isLoading])
  const [inputValue, setInputValue] = useState('')
  const linkProps = (href) => useLink({ href })

  return (
    <Theme name="f3">
      <YStack bg="white">
        <Nav />
        <SectionTopText />

        <Layout1>
          {ARTICLES.map((article, index) => {
            const isLastItem = index === ARTICLES.length - 1
            const isFirstItem = index === 0
            return (
                <SectionArticle
                  {...{
                    isLastItem,
                    isFirstItem,
                    index,
                    article,
                    linkProps,
                    inputValue,
                    setInputValue,
                    data,
                    fetchData,
                    isLoading,
                  }}
                />
            )
          })}
          <SectionGreen></SectionGreen>
          <SectionFakeArticle />
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

export function Pack() {
  const media = useMedia()
  return <>{media.sm ? <Mobile /> : <Desktop />}</>
}

export default Pack
