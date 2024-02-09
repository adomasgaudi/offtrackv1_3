import { Button, H2, H5, Image, Input, Spinner, Theme, XStack, YStack } from '@my/ui'
import {
  ArticleBox,
  InsetShadow,
  LayoutLeft,
  P1,
  P2,
  TooltipButton,
  myBoxShadow1,
} from './components'
import { ArrowBigRight, MessageCircleQuestion, Share2 } from '@tamagui/lucide-icons'

export const SectionArticle = ({
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
}) => {
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
                      onPress={() => fetchData(`summarise in 5 sentences: ${article.text[0]}`)}
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
              <Button onPress={() => fetchData(inputValue)} icon={ArrowBigRight} size="$3"></Button>
              <Button onPress={() => fetchData(`explain quarks in 5 sentences`)} size="$3">
                What's a quark?
              </Button>
            </XStack>
          </YStack>
        </ArticleBox>
      </Theme>
    </YStack>
  )
}
