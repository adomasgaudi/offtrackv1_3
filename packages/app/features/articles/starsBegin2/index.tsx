import {
  Button,
  H1,
  H3,
  H4,
  Paragraph,
  Separator,
  Theme,
  XStack,
  YStack,
  Image,
  useMedia,
  styled,
  H2,
  Spinner,
} from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React, { useEffect, useState } from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

import { P2 } from './parts/comps'
import { SectionText } from './sections/sectionText'
import { SectionFoot, SectionMain, SectionTop } from './sectionsv2'
import { SVGPaper, SVGWrap } from './parts/svgs'
import { LoadingWrapper } from './partsv2/loading'

const { useParam } = createParam<{ id: string }>()
const RedBox = ({ title, linkProps }) => (
  <YStack w={300} h={300} bg="#ff7272" p={10} jc="center" m={5}>
    <H3>{title}</H3>
    <Button {...linkProps}>Read</Button>
  </YStack>
)
export const P1 = styled(Paragraph, {
  name: 'ParSkill',
  fontWeight: 'semi-bold',
  fontSize: 20,
})

const ArticleStars2v1 = () => {
  const linkProps = useLink({
    href: '/',
  })
  const media = useMedia()

  return (
    <Theme name="dark">
      <YStack w="100%" h="100%" bc="$background">
        <YStack maxWidth={1200} w="100%" mx="auto" borderColor="$blue1Dark">
          <Paragraph p="$4" fontWeight="bold">
            Written by Adomas G.
          </Paragraph>
          <XStack>
            <Button {...linkProps}>Home</Button>
          </XStack>
          <YStack f={1} mt="$10" jc="center" p="$4" space>
            <YStack gap="$4" minHeight={200}>
              <H1 mb={100} fontSize={media.sm ? 30 : undefined} letterSpacing={'normal'}>
                Stars for beginners - Stars are hydrogen
              </H1>
              <H4>Protons under gravity</H4>
              <Paragraph fontWeight="bold">2024 Feb</Paragraph>
            </YStack>
          </YStack>
        </YStack>

        <Theme name="light">
          <YStack w="100%" h="100%" bc="$background">
            <Separator />

            <YStack w="100%" minHeight={300} bg="$background">
              <YStack maxWidth={1200} w="100%" mx="auto" py={100} p="$4">
                <YStack my={100} maxWidth={800}>
                  <SectionText></SectionText>
                </YStack>
              </YStack>
            </YStack>

            <YStack jc="center" ai="center" pb={100}>
              <XStack>
                <Button {...linkProps}>Home</Button>
              </XStack>
            </YStack>
          </YStack>
        </Theme>
      </YStack>
    </Theme>
  )
}

const ArticleStars2v3 = () => {
  const [isMobile, setIsMobile] = useState(null)
  const mediaQuery = useMedia()

  useEffect(() => {
    setIsMobile(mediaQuery.xs)
  }, [mediaQuery])

  if (isMobile === null) {
    return null // or a loading spinner
  }

  return (
    <Theme name="light">
      {isMobile ? (
        <YStack w={500} h={500} bg="blue">
          <H1>Desktop</H1>
        </YStack>
      ) : (
        // <YStack minHeight="100vh">
        //   <SVGWrap SVG={SVGPaper} w="100%" h="100%" minHeight="100vh">
        //     <YStack px={20}>
        //       <SectionTop />
        //       <SectionMain />
        //       <SectionFoot />
        //     </YStack>
        //   </SVGWrap>
        // </YStack>
        <YStack w={100} h={100} bg="red">
          <H1>Desktop</H1>
        </YStack>
      )}
    </Theme>
  )
}

const ArticleStars2v2 = () => {
  return (
    <LoadingWrapper>
      {(isMobile) => (
        <Theme name="red">
          <YStack minHeight="100vh">
            <SVGWrap
              SVG={SVGPaper}
              w="100%"
              h="100%"
              minHeight="100vh"
              color1="#fff8f8"
              color2="#ebebeb"
              color3="#f7f7f7"
              color4="#e2e2e2"
            >
              <YStack>
                <SectionTop />
                <SectionMain />
                <SectionFoot />
              </YStack>
            </SVGWrap>
          </YStack>
        </Theme>
      )}
    </LoadingWrapper>
  )
}

export default ArticleStars2v2
