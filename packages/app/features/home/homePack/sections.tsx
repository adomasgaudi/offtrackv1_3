import { Button, H1, H2, H5, Image, Input, Spinner, Theme, XStack, YStack } from '@my/ui'
import {
  ArticleBox,
  InsetShadow,
  LayoutLeft,
  P1,
  P2,
  TooltipButton,
  myBoxShadow1,
} from './components'
import {
  Accessibility,
  Angry,
  Apple,
  ArrowBigRight,
  Banana,
  MessageCircleQuestion,
  Share2,
  Wind,
} from '@tamagui/lucide-icons'

export const Nav = () => {
  return (
    <XStack w="full" h={60} mb={50} bg="#019564" jc="flex-start" ai="center" gap={200}>
      <XStack maxWidth={800} width={800} m="auto" gap={50}>
        <P1 color="white" fontWeight="bold">
          Made in China, not
        </P1>
      </XStack>
    </XStack>
  )
}

export const SectionTopText = () => {
  return (
    <LayoutLeft bg="$background">
      <H2>Que</H2>
      <P2>Exoplanet within 10ly post </P2>
      <P2>Stars for beginners</P2>
      <P2>Interstellar travel - Python project </P2>
      <P2>Quantum Mechanics - Python & qiskit project </P2>
      <P2>Front-end Frameworks </P2>
      <P2>CSS primitives </P2>
    </LayoutLeft>
  )
}

export const SectionFakeArticle = () => {
  return (
    <YStack mb={200} borderRadius="10px" p={10} mt="$10">
      <InsetShadow>Writing... </InsetShadow>
      <InsetShadow>Quantum mechanics post </InsetShadow>
    </YStack>
  )
}
export const SectionBottom = () => {
  return (
    <YStack width={1200} m="auto" borderTopWidth={2}>
      <XStack jc="space-between">
        <YStack>
          <H1>This</H1>
          <H1>is</H1>
          <H1>a</H1>
          <H1>web</H1>
          <H1>site</H1>
        </YStack>
        <YStack jc="center" ai="center">
          <XStack gap={50}>
            <Angry />
            <XStack>
              <Wind />
              <Accessibility />
            </XStack>
            <Banana />
          </XStack>
        </YStack>
        <YStack jc="flex-end">
          <H1>bruv</H1>
        </YStack>
      </XStack>
    </YStack>
  )
}
