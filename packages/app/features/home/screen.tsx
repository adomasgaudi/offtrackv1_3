import React, { useState } from 'react'
import {
  H1,
  H2,
  H3,
  Paragraph,
  Square,
  Theme,
  YStack,
  styled,
  useMedia,
  Image,
  XStack,
  Button,
  H4,
  TextArea,
  H5,
  Tooltip,
  TooltipProps,
  Circle,
  TooltipGroup,
  Input,
} from '@my/ui'
import {
  ArticleBox,
  ArticleBoxSM,
  InsetShadow,
  Layout1,
  LayoutLeft,
  P1,
  P2,
} from '../../components'
import images from '../../../Images'
import { useLink } from 'solito/link'
import { BrainCircuit, ChevronUp, MessageCircleQuestion, Plus, Share2 } from '@tamagui/lucide-icons'

const useOpenAI = () => {
  const [data, setData] = useState<any>(null)
  const OPENAI_KEY = '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'

  const fetchData = async (inputValue: string) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-16k-0613',
        messages: [
          {
            role: 'user',
            content: `${inputValue}`,
          },
        ],
      }),
    });
    const json = await response.json();
    setData(json.choices[0].message.content);
    console.log(json.choices[0].message.content);
    return json.choices[0].message.content;
  };

  return { data, fetchData }
}

const ARTICLES = [
  {
    title: ['Stars for beginners - Mostly everything is this'],
    text: [
      `The universe, is mostly up and down quarks. Each one of the stars above and, in fact, almost everything else around you, yourself included, is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the up
    quark and -1/3 for the down one. You can remember that "up" means positive and "down"
    means negative, and also that "up" means more of charge than the "down". So if you take two up...`,
    ],
    image: images.quarks3.src,
    link: '/article/exoplanetsin10',
  },
  {
    title: ['Stars for beginners - They are all the same'],
    text: [
      `All stars are just spheres of hydrogen buring into helium under the pressure of gravity. 4 separate protons trying to merge and change into a nucleus of 2 protons and 2 neutrons. Imagine a gas cloud the mass of Saturn collapsing to form a planet. That planet as well as the biggest star is mostly the same stuff - hydrogen. You can keep adding hydrogen, doubling its mass and it will contract and heat up under the increasing gravity, but it will not be hot enough to fuse hydrogen into helium untill its about 80 times the mass of Jupiter. That's what we call a failed star, a brown dwarf, if its less than 14 Jupiter masses, then its just...`,
    ],
    image: images.starsizes.src,
    link: '/article/exoplanetsin10',
  },
]

function Demo({ Icon, onPress, tooltipText, ...props }: any & { Icon?: any }) {
  return (
    <TooltipGroup delay={{ open: 100, close: 100 }}>
      <Tooltip {...props}>
        <Tooltip.Trigger>
          <Button
            bg="none"
            hoverStyle={{ bg: '$background' }}
            icon={Icon}
            circular
            onPress={onPress}
          />
        </Tooltip.Trigger>
        <Tooltip.Content
          enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
          scale={1}
          x={0}
          y={0}
          opacity={1}
          animation={[
            '100ms',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
        >
          <Tooltip.Arrow />
          <Paragraph size="$2" lineHeight="$1">
            {tooltipText}
          </Paragraph>
        </Tooltip.Content>
      </Tooltip>
    </TooltipGroup>
  )
}

const Mobile = () => {
  return (
    <Layout1>
      <H1>Mobile version will be finished in 2 days, view on larger desktop for now</H1>
      {/* {ARTICLES.map((article, index) => (
        <ArticleBoxSM key={index} my={200} mx={4}>
          <YStack>
            <H1>{article.title[0]}</H1>
            <P1>{article.title[0]}</P1>
          </YStack>
        </ArticleBoxSM>
      ))} */}
    </Layout1>
  )
}
const myBoxShadow1 = `   
0px 0px 1px hsla(0, 0%, 0%, 0.025), 
0px 0px 2px hsla(0, 0%, 0%, 0.025), 
0px 0px 4px hsla(0, 0%, 0%, 0.025), 
0px 0px 8px hsla(0, 0%, 0%, 0.025), 
0px 0px 16px hsla(0, 0%, 0%, 0.025)
`
const Desktop = () => {
  const linkProps = (href) => useLink({ href })
  const { data, fetchData } = useOpenAI()
  const [inputValue, setInputValue] = useState('')
  const [currentText, setCurrentText] = useState(ARTICLES.map((article) => article.text[0]))

  
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
                          <H5>Research: 5A</H5>
                          <H5>Writing: 5A</H5>
                        </XStack>
                        <XStack>
                          <Demo
                            groupId="1"
                            placement="top"
                            Icon={<Share2 />}
                            tooltipText="just copy url and share it, bruv"
                          />
                        </XStack>
                      </XStack>
                      <H2 mb="$4" cursor="pointer" {...linkProps(article.link)}>
                        {article.title[0]}
                      </H2>
                      <XStack gap={15}>
                        <YStack gap={5}>
                        <Demo
                          groupId="1"
                          placement="top"
                          Icon={BrainCircuit}
                          onPress={() => fetchData(`summarise: ${article.text[0]}`)}
                          tooltipText="ChatGPT summary"
                        />
                        <Demo
                          groupId="1"
                          placement="top"
                          Icon={MessageCircleQuestion}
                          onPress={() => fetchData(`summarise like i'm 5${article.text[0]}`)}
                          tooltipText="ChatGPT summary for dummies"
                        />
                        </YStack>
                        {/* <P1 mb={50}>{currentText[index]}</P1> */}
                        <P1> {data ? data : article.text[0]}</P1>
                      </XStack>
                      {/* <P1 mb={50}>{article.text[0]}</P1> */}
                      <XStack jc="center" ai="center" gap={5}>
                        <Input
                          size="$2"
                          borderWidth={1}
                          borderColor="#cacaca"
                          outlineColor="none"
                          outlineWidth={0}
                          value={inputValue}
                          width="100%"
                          onChangeText={(text) => setInputValue(text)}
                        />
                        <Button
                          onPress={() => {
                            fetchData(inputValue)
                          }}
                        >
                          Go!
                        </Button>
                        <Button
                          onPress={() => {
                            fetchData(`explain quarks in 5 sentences`)
                          }}
                        >
                          about quarks
                        </Button>
                        <Button
                          onPress={() => {
                            fetchData(`explain the strong force in 5 sentences`)
                          }}
                        >
                          about strong force 
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

export function HomeScreen() {
  const media = useMedia()

  return <>{media.sm ? <Mobile /> : <Desktop />}</>
}
