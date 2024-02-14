import { Button, H2, H5, Image, Input, Paragraph, Spinner, Theme, View, XStack, YStack } from '@my/ui'
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
import useOpenAI from './useOpenai'
import { useState } from 'react'
import { useLink } from 'solito/link'

export const SectionArticle = ({ isLastItem, isFirstItem, index, article }) => {
  const { data, fetchData, isLoading } = useOpenAI()
  const [inputValue, setInputValue] = useState('')
  const linkProps = (href) => useLink({ href })

  return (
    <YStack
      key={index}
      mt={isFirstItem ? 0 : 6}
      mb={isLastItem ? 200 : 100}
      borderTopWidth={0.5}
      borderTopColor="#ececec"
      w="100%"
      pt={20}
    >
      <YStack w="100%" bg="#f3f3f3" m="auto" py={20}>
        <YStack maxWidth={800} w={800} m="auto" position="relative">
          <Image
            source={{
              uri: article.image,
              width: '100%',
              height: article.imageHeight,
            }}
            resizeMode="cover"
            cursor="pointer"
            {...linkProps(article.link)}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
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
      <Theme name="light2">
        <YStack maxWidth={800} m="auto">
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
              <H2
                mb="$6"
                hoverStyle={{ fontSize: 31, transition: '0.2s' }}
                cursor="pointer"
                {...linkProps(article.link)}
              >
                {article.title[0]}
              </H2>
              <XStack gap={15}>
                {isLoading ? (
                  <XStack jc="center" ai="center" h={200} f={1}>
                    <Spinner />
                  </XStack>
                ) : (
                  <P1 mb={30}>{data ? data : article.text[0]}</P1>
                )}
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
              </XStack>
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
                <Button
                  onPress={() => fetchData(inputValue)}
                  icon={ArrowBigRight}
                  size="$3"
                ></Button>
              </XStack>
            </YStack>
          </ArticleBox>
        </YStack>
      </Theme>
    </YStack>
  )
}
