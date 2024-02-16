import { Button, H2, H5, Image, Input, Spinner, Theme, View, XStack, YStack } from '@my/ui'
import { ArticleBox, P1, TooltipButton } from '../components'
import { ArrowBigRight, MessageCircleQuestion, Share2 } from '@tamagui/lucide-icons'
import useOpenAI from '../useHooks'
import { useState } from 'react'
import { useLink } from 'solito/link'

const ArticleTopLine = () => {
  return (
    <XStack jc="space-between">
      <XStack gap={20}>
        <H5>Research: some</H5>
        <H5>Writing: meh</H5>
      </XStack>
      <XStack>
        <TooltipButton
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
  )
}
const ArticleMainText = ({ isLoading, data, article, fetchData, mobile }) => {
  return (
    <XStack gap={15}>
      {isLoading ? (
        <XStack jc="center" ai="center" h={200} f={1}>
          <Spinner />
        </XStack>
      ) : (
        <P1 mb={30}>{data ? data : article.text[0]}</P1>
      )}
      {!mobile && (
        <YStack>
          <TooltipButton
            groupId="1"
            placement="right"
            Trigger={() => (
              <Button
                bg="none"
                hoverStyle={{ bg: '$background' }}
                icon={<MessageCircleQuestion />}
                circular
                onPress={() => fetchData(`summarise this text: ${article.fullText}`)}
              ></Button>
            )}
            tooltipText="Summarise the whole article"
          />
        </YStack>
      )}
    </XStack>
  )
}
const ArticleInput = ({ fetchData, setInputValue, inputValue }) => {
  return (
    <XStack jc="center" ai="center" gap={5}>
      <Input
        size="$3"
        borderWidth={1}
        borderColor="#cacaca"
        outlineColor="none"
        outlineWidth={0}
        placeholder="what is a quark ?"
        value={inputValue}
        width="100%"
        onChangeText={(text) => setInputValue(text)}
      />
      <Button onPress={() => fetchData(inputValue)} icon={ArrowBigRight} size="$3"></Button>
    </XStack>
  )
}
const ArticleImage = ({ linkProps, article, mobile }) => {
  return (
    <YStack w="100%" bg="#f3f3f3" m="auto" py={20}>
      <YStack maxWidth={800} w="100%" m="auto" >
        <Image
          source={{
            uri: article.image,
            width: '100%',
            height: mobile ? article.imageHeight / 1.3 : article.imageHeight,
          }}
          resizeMode="cover"
          cursor="pointer"
          {...linkProps(article.link)}
        />
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.49)',
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: 2,
          }}
        >
          <P1 color="black" fontWeight="bold">
            {article.imageTitle}
          </P1>
        </View>
      </YStack>
    </YStack>
  )
}
const ArticleHeader = ({ linkProps, article }) => {
  return (
    <H2
      mb="$6"
      hoverStyle={{ fontSize: 31, transition: '0.2s' }}
      cursor="pointer"
      {...linkProps(article.link)}
    >
      {article.title[0]}
    </H2>
  )
}

export const SectionArticle = ({ isLastItem, isFirstItem, index, article, mobile }) => {
  const { data, fetchData, isLoading } = useOpenAI()
  const [inputValue, setInputValue] = useState('')
  const linkProps = (href) => useLink({ href })

  return (
    <>
      {mobile ? (
        <YStack
          key={index}
          mt={isFirstItem ? 0 : 6}
          mb={isLastItem ? 200 : 100}
          borderTopWidth={0.5}
          borderTopColor="#ececec"
          w="100%"
          pt={20}
        >
          <ArticleImage {...{ linkProps, article, mobile }} />
          <Theme name="light2">
            <YStack maxWidth={800} m="auto">
              <ArticleBox>
                <YStack>
                  <ArticleTopLine />
                  <ArticleHeader {...{ linkProps, article }} />
                  <ArticleMainText {...{ isLoading, data, article, fetchData, mobile }} />
                  <ArticleInput {...{ fetchData, setInputValue, inputValue }} />
                </YStack>
              </ArticleBox>
            </YStack>
          </Theme>
        </YStack>
      ) : (
        <YStack
          key={index}
          mt={isFirstItem ? 0 : 6}
          mb={isLastItem ? 200 : 100}
          borderTopWidth={0.5}
          borderTopColor="#ececec"
          w="100%"
          pt={20}
        >
          <ArticleImage {...{ linkProps, article }} />
          <Theme name="light2">
            <YStack maxWidth={800} m="auto">
              <ArticleBox>
                <YStack>
                  <ArticleTopLine />
                  <ArticleHeader {...{ linkProps, article }} />
                  <ArticleMainText {...{ isLoading, data, article, fetchData }} />
                  <ArticleInput {...{ fetchData, setInputValue, inputValue }} />
                </YStack>
              </ArticleBox>
            </YStack>
          </Theme>
        </YStack>
      )}
    </>
  )
}
