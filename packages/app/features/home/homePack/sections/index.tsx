import { Anchor, Button, H1, H2, Theme, View, XStack, YStack } from '@my/ui'
// import { InsetShadow, P2, P4 } from './components'
import {
  Accessibility,
  Angry,
  ArrowDown,
  Atom,
  Banana,
  Cat,
  CodeSquare,
  Newspaper,
  Twitter,
  Wind,
} from '@tamagui/lucide-icons'
import { useState } from 'react'
import { InsetShadow, P2, P4 } from '../components'

export const Nav = ({ isScrolled, setIsHovered, isHovered, onCatPress }) => (
  <XStack
    w="100%"
    // h={60}
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
    pt={5}
    px={20}
  >
    <XStack maxWidth={800} width="100%" m="auto" gap={40}>
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
      <YStack ai="center" position="relative" x={isScrolled ? 0 : -40} animation="slow" onPress={onCatPress}>
        <Cat />
        <P2 color="white">Quantum</P2>
        <YStack ai="center" position="absolute" x={0} hoverStyle={{ x: 10 }} animation="slow">
          <Cat />
          <P2 color="white">Quantum</P2>
        </YStack>
      </YStack>
    </XStack>
  </XStack>
)

const SectionTopTextBottomLinks = ({ onPress, mobile, xs }) => {
  return (
    <XStack w="100%" h={100} ai="center" jc="center">
      <XStack bg="#79ffd2" f={1} h={1}></XStack>
      <Button
        circular
        borderWidth={1}
        hoverStyle={{ borderWidth: 2, borderColor: '$accent2', transition: '.05s' }}
        borderColor="$accent"
        onPress={onPress}
      >
        <ArrowDown></ArrowDown>
      </Button>
      {/* <XStack bg="#79ffd2" f={1} h={1}></XStack> */}
      <XStack f={1} h={2} position="relative">
        <XStack position="absolute" right={0} h="100%" ai="center" pr={20} gap={30}>
          {xs ? (
            <Anchor href="https://goingoffroad.medium.com/">
              <Newspaper />
            </Anchor>
          ) : (
            <Anchor href="https://goingoffroad.medium.com/">
              <H2>Medium</H2>
            </Anchor>
          )}
          {xs ? (
            <Anchor href="https://twitter.com/adomas_offtrack">
              <Twitter />
            </Anchor>
          ) : (
            <Anchor href="https://twitter.com/adomas_offtrack">
              <H2>Twitter</H2>
            </Anchor>
          )}
        </XStack>
      </XStack>
    </XStack>
  )
}

const SectionTopTextIcons = ({ mobile, setIsHovered, isHovered }) => {
  return (
    <XStack gap={60} mt={0} w="100%" jc={mobile ? "center" : "flex-start"}>
      <YStack ai="center" hoverStyle={{ opacity: 0 }} animation="slow">
        <Atom />
        <P2 color="white">Physics</P2>
      </YStack>
      <YStack
        ai="center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CodeSquare color={isHovered ? '#94ff94' : 'white'} animation="slow" />
        <P2 color={isHovered ? '#9aff9a' : 'white'} animation="slow">
          Code
        </P2>
      </YStack>
      <YStack ai="center" position="relative">
        <Cat />
        <P2 color="white">Quantum</P2>

        <YStack ai="center" position="absolute" x={0} hoverStyle={{ x: 5 }} animation="slow">
          <Cat />
          <P2 color="white">Quantum</P2>
        </YStack>
      </YStack>
    </XStack>
  )
}

export const SectionTopText = ({ onPress, xs, mobile }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Theme name="darkGreen">
      <YStack bg="$background" h="100vh" jc="center" ai="center" px={mobile && 10}>
        <YStack ai="center" jc="center">
          <SectionTopTextIcons {...{ mobile, setIsHovered, isHovered }} />
          <XStack m="auto" w="fit-content">
            <H1
              mb={0}
              color="$accent"
              enterStyle={{ opacity: 0, x: -50 }}
              textAlign="center"
              animation="slow"
            >
              This way&nbsp;to&nbsp;the off&#8209;track posts
            </H1>
          </XStack>
          <SectionTopTextBottomLinks {...{ onPress, mobile, xs }} />
        </YStack>
      </YStack>
    </Theme>
  )
}

export const SectionFakeArticle = () => {
  return (
    <YStack mb={200} w="100%" borderRadius="10px" p={10} mt="$10">
      <InsetShadow>Quantum mechanics post hasn't been uploaded in this universe yet, please switch universes or wait a bit.</InsetShadow>
    </YStack>
  )
}

export const SectionEdgarAlanPoe = ({ mobile }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      {mobile ? (
        <YStack
          height={isHovered ? 400 : 20}
          hoverStyle={{ transition: '1s' }}
          transition="1s"
          bg="$background"
          width="100%"
          mb={0}
          borderTopWidth={2}
          borderBottomWidth={2}
          borderTopColor="#ddd"
          borderBottomColor="#ddd"
          overflow="hidden"
          onMouseEnter={() => setIsHovered(true)}
        >
          <YStack w={1200} m="auto" py={10}>
            <P4>
              No doubt I now grew very pale; — but I talked more fluently, and with a heightened
              voice. Yet the sound increased — and what could I do? It was a low, dull, quick sound
              — much such a sound as a watch makes when enveloped in cotton. I gasped for breath —
              and yet the officers heard it not. I talked more quickly — more vehemently; but the
              noise steadily increased. I arose and argued about trifles, in a high key and with
              violent gesticulations; but the noise steadily increased. Why would they not be gone?
              I paced the floor to and fro with heavy strides, as if excited to fury by the
              observations of the men — but the noise steadily increased. Oh God! what could I do? I
              foamed — I raved — I swore! I swung the chair upon which I had been sitting, and
              grated it upon the boards, but the noise arose over all and continually increased. It
              grew louder — louder — louder! And still the men chatted pleasantly, and smiled. Was
              it possible they heard not? Almighty God! — no, no! They heard! — they suspected! —
              they knew! — they were making a mockery of my horror! — this I thought, and this I
              think. But anything was better than this agony! Anything was more tolerable than this
              derision! I could bear those hypocritical smiles no longer! I felt that I must scream
              or die! — and now — again! — hark! louder! louder! louder! louder! —
            </P4>
            <P4>
              “Villains!” I shrieked, “dissemble no more! I admit the deed! — tear up the planks! —
              here, here! — it is the beating of his hideous heart!”
            </P4>
          </YStack>
        </YStack>
      ) : (
        <YStack
          height={isHovered ? 400 : 20}
          hoverStyle={{ transition: '1s' }}
          transition="1s"
          bg="$background"
          width="100%"
          mb={0}
          borderTopWidth={2}
          borderBottomWidth={2}
          borderTopColor="#ddd"
          borderBottomColor="#ddd"
          overflow="hidden"
          onMouseEnter={() => setIsHovered(true)}
        >
          <YStack w={1200} m="auto" py={10}>
            <P4>
              I smiled, — for what had I to fear? I bade the gentlemen welcome. The shriek, I said,
              was my own in a dream. The old man, I mentioned, was absent in the country. I took my
              visitors all over the house. I bade them search — search well. I led them, at length,
              to his chamber. I showed them his treasures, secure, undisturbed. In the enthusiasm of
              my confidence, I brought chairs into the room, and desired them here to rest from
              their fatigues, while I myself, in the wild audacity of my perfect triumph, placed my
              own seat upon the very spot beneath which reposed the corpse of the victim.
            </P4>
            <P4>
              The officers were satisfied. My manner had convinced them. I was singularly at ease.
              They sat, and while I answered cheerily, they chatted of familiar things. But, ere
              long, I felt myself getting pale and wished them gone. My head ached, and I fancied a
              ringing in my ears: but still they sat and still chatted. The ringing became more
              distinct: — it continued and became more distinct: I talked more freely to get rid of
              the feeling: but it continued and gained definitiveness — until, at length, I found
              that the noise was not within my ears.
            </P4>
            <P4>
              No doubt I now grew very pale; — but I talked more fluently, and with a heightened
              voice. Yet the sound increased — and what could I do? It was a low, dull, quick sound
              — much such a sound as a watch makes when enveloped in cotton. I gasped for breath —
              and yet the officers heard it not. I talked more quickly — more vehemently; but the
              noise steadily increased. I arose and argued about trifles, in a high key and with
              violent gesticulations; but the noise steadily increased. Why would they not be gone?
              I paced the floor to and fro with heavy strides, as if excited to fury by the
              observations of the men — but the noise steadily increased. Oh God! what could I do? I
              foamed — I raved — I swore! I swung the chair upon which I had been sitting, and
              grated it upon the boards, but the noise arose over all and continually increased. It
              grew louder — louder — louder! And still the men chatted pleasantly, and smiled. Was
              it possible they heard not? Almighty God! — no, no! They heard! — they suspected! —
              they knew! — they were making a mockery of my horror! — this I thought, and this I
              think. But anything was better than this agony! Anything was more tolerable than this
              derision! I could bear those hypocritical smiles no longer! I felt that I must scream
              or die! — and now — again! — hark! louder! louder! louder! louder! —
            </P4>
            <P4>
              “Villains!” I shrieked, “dissemble no more! I admit the deed! — tear up the planks! —
              here, here! — it is the beating of his hideous heart!”
            </P4>
          </YStack>
        </YStack>
      )}
    </>
  )
}

export const SectionBottom = ({ mobile }) => {
  return (
    <View width="100%" maxWidth={1200} m="auto" py={20}>
      <View jc="space-between" flexDirection={mobile ? 'column' : 'row'}>
        <YStack ai={mobile ? 'center' : 'flex-start'} mb={mobile ? 50 : 0}>
          <H1>This is a</H1>
          <H1>website</H1>
        </YStack>
        <YStack jc="center" ai="center" mb={mobile ? 50 : 0}>
          <XStack gap={50}>
            <Angry />
            <XStack>
              <Wind />
              <Accessibility />
            </XStack>
            <Banana />
          </XStack>
        </YStack>
        <YStack jc="flex-end" ai={mobile ? 'center' : 'flex-start'} mb={mobile ? 20 : 0}>
          <H1>bruv</H1>
        </YStack>
      </View>
    </View>
  )
}
