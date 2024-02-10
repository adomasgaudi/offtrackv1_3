import { Button, H1, H2, H5, Image, Input, Paragraph, Spinner, Theme, XStack, YStack } from '@my/ui'
import {
  ArticleBox,
  InsetShadow,
  LayoutLeft,
  P1,
  P2,
  P3,
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
// import { LinearGradient } from 'tamagui/linear-gradient'

export const Nav = () => {
  return (
    <XStack w="full" h={60} mb={50} bg="#019564" jc="flex-start" ai="center" gap={200}>
      <XStack maxWidth={800} width={800} m="auto" gap={10}>
        <P1 color="white" fontWeight="bold">
          Made in China, not
        </P1>
        <P1 color="white" fontWeight="bold">
          Made in China, not
        </P1>
        <P1 color="white" fontWeight="bold">
          Made in China, not
        </P1>
        <P1 color="white" fontWeight="bold">
          Made in China, not
        </P1>
      </XStack>
    </XStack>
  )
}

export const SectionTopText = () => {
  return (
    <LayoutLeft bg="white">
      <H1>Welcome to the off track posts</H1>
      <Paragraph pl={10} fontWeight="bold" color="gray" fontSize={12}>
        May I interest you with:
      </Paragraph>
      <P2 pl={30}>Exoplanet within 10ly post </P2>
      <P2 pl={50}>Stars for beginners</P2>
      <P2 pl={70}>Interstellar travel - Python project </P2>
      <P2 pl={90}>Quantum Mechanics - Python & qiskit project </P2>
      <P2 pl={110}>Front-end Frameworks </P2>
      <P2 pl={130}>CSS primitives </P2>
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
export const SectionGreen = () => {
  return (
    <YStack
      height={150}
      bg="#019564"
      width="100%"
      mb={150}
    >
      <P3>
        I smiled, — for what had I to fear? I bade the gentlemen welcome. The shriek, I said, was my
        own in a dream. The old man, I mentioned, was absent in the country. I took my visitors all
        over the house. I bade them search — search well. I led them, at length, to his chamber. I
        showed them his treasures, secure, undisturbed. In the enthusiasm of my confidence, I
        brought chairs into the room, and desired them here to rest from their fatigues, while I
        myself, in the wild audacity of my perfect triumph, placed my own seat upon the very spot
        beneath which reposed the corpse of the victim.
      </P3>
      <P3>
        The officers were satisfied. My manner had convinced them. I was singularly at ease. They
        sat, and while I answered cheerily, they chatted of familiar things. But, ere long, I felt
        myself getting pale and wished them gone. My head ached, and I fancied a ringing in my ears:
        but still they sat and still chatted. The ringing became more distinct: — it continued and
        became more distinct: I talked more freely to get rid of the feeling: but it continued and
        gained definitiveness — until, at length, I found that the noise was not within my ears.
      </P3>
      <P3>
        No doubt I now grew very pale; — but I talked more fluently, and with a heightened voice.
        Yet the sound increased — and what could I do? It was a low, dull, quick sound — much such a
        sound as a watch makes when enveloped in cotton. I gasped for breath — and yet the officers
        heard it not. I talked more quickly — more vehemently; but the noise steadily increased. I
        arose and argued about trifles, in a high key and with violent gesticulations; but the noise
        steadily increased. Why would they not be gone? I paced the floor to and fro with heavy
        strides, as if excited to fury by the observations of the men — but the noise steadily
        increased. Oh God! what could I do? I foamed — I raved — I swore! I swung the chair upon
        which I had been sitting, and grated it upon the boards, but the noise arose over all and
        continually increased. It grew louder — louder — louder! And still the men chatted
        pleasantly, and smiled. Was it possible they heard not? Almighty God! — no, no! They heard!
        — they suspected! — they knew! — they were making a mockery of my horror! — this I thought,
        and this I think. But anything was better than this agony! Anything was more tolerable than
        this derision! I could bear those hypocritical smiles no longer! I felt that I must scream
        or die! — and now — again! — hark! louder! louder! louder! louder! —
      </P3>
      <P3>
        “Villains!” I shrieked, “dissemble no more! I admit the deed! — tear up the planks! — here,
        here! — it is the beating of his hideous heart!”
      </P3>
    </YStack>
  )
}
export const SectionBottom = () => {
  return (
    <YStack width="100%" maxWidth={1200} m="auto" borderTopWidth={2}>
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
