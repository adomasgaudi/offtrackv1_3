import {
  Paragraph,
  H3 as H3T,
  Image,
  YStack,
  useMedia,
  Text,
  XStack,
  Theme,
  Button,
  Anchor,
  View,
} from '@my/ui'
import { H1, H3, P } from '../partsv2/comps'
import images from '../../../../../Images'
import { Brain, Moon, Twitter } from '@tamagui/lucide-icons'
import { useLink } from 'solito/link'
const decorPR = {
  textDecorationStyle: 'dashed',
  textDecorationLine: 'underline',
  textDecorationColor: '$accent',
}
const brP = {
  borderRightWidth: 2,
  borderRightColor: '$accent',
  pr: 10,
}
const blP = {
  borderLeftWidth: 2,
  borderLeftColor: '$accent',
  pr: 10,
}
const borderX = {
  borderRightWidth: 1,
  borderRightColor: '$faint',
  borderLeftWidth: 1,
  borderLeftColor: '$faint',
}

export const SectionTop = ({ handleChangeTheme }) => {
  const mobile = useMedia().xs

  return (
    <YStack px={mobile ? 10 : 40} borderBottomWidth={2} borderBottomColor="$faint">
      <XStack maxWidth={1200} px={10} w="100%" m="auto" py={5} jc="space-between" ai="center">
        <P
          textTransform="uppercase"
          color="$color"
          fontWeight={400}
          letterSpacing={3}
          fontSize={mobile ? 10 : 12}
        >
          written by Adomas gaudi
        </P>
        <Button
          hoverStyle={{ bg: '$accent' }}
          animation="fast"
          pressStyle={{ bg: '$background' }}
          icon={Moon}
          onPress={handleChangeTheme}
        ></Button>
      </XStack>
      {/* <YStack maxWidth={1200} w="100%" m="auto" py={200} {...borderX}>
        {mobile && (
          <YStack {...blP} px={3}>
            <H1.Color>
              Stars are{' '}
              <Text bg="yellow" hoverStyle={{ bg: 'red' }} animation="slow">
                hydrogen
              </Text>
            </H1.Color>
            <P color="$accentl4">2024 FEB</P>
          </YStack>
        )}
        {!mobile && (
          <YStack {...brP}>
            <H1.Color textAlign="right">
              Stars are{' '}
              <Text bg="yellow" px={5} hoverStyle={{ bg: 'red', color: 'white' }} animation="slow">
                hydrogen
              </Text>
            </H1.Color>
            <P color="$accentl4" textAlign="right">
              2024 FEB
            </P>
          </YStack>
        )}
      </YStack> */}
    </YStack>
  )
}
const myBoxShadow1 = `   
0px 0px 1px hsla(0, 0%, 0%, 0.05), 
0px 0px 2px hsla(0, 0%, 0%, 0.05), 
0px 0px 4px hsla(0, 0%, 0%, 0.05), 
0px 0px 8px hsla(0, 0%, 0%, 0.05), 
0px 0px 16px hsla(0, 0%, 0%, 0.05)
`
const SectionMainContent = ({ mobile }) => {
  const linkProps = useLink({ href: '/' })
  return (
    <YStack>
      <XStack mb={50} mt={10}>
        <Button
          hoverStyle={{ bg: '$accent' }}
          animation="fast"
          pressStyle={{ bg: '$background' }}
          {...linkProps}
          boxShadow={myBoxShadow1}
          size="$2"
        >
          <P color="$primary">HOME</P>
        </Button>
      </XStack>
      {mobile && (
        <YStack {...blP} px={3} my={50}>
          <H1.Color>
            Everything is just these 
            <Text bg="$accent" hoverStyle={{ bg: 'red' }} animation="slow">
               two 
            </Text>
            quarks
          </H1.Color>
          <P color="$accent">2024 FEB</P>
        </YStack>
      )}
      {!mobile && (
        <YStack {...brP} my={150}>
          <H1.Color textAlign="right">
            Everything is just these
            <Text
              bg="$accent"
              px={5}
              hoverStyle={{ bg: '$primary', color: '$color' }}
              animation="slow"
            >
              two&nbsp;quarks
            </Text>
          </H1.Color>

          <P color="$accent" textAlign="right">
            2024 FEB
          </P>
        </YStack>
      )}
      <XStack mb={50} gap={50}>
        <P color="$color" px={15} borderRadius={4} boxShadow={myBoxShadow1}>
          2min read
        </P>
        {/* <XStack
          
          color="$color"
          px={15}
          borderRadius={4}
          boxShadow={myBoxShadow1}
          jc="center"
          ai="center"
        >
          <Twitter size="$1" color="$color" />
        </XStack> */}
        {/* <XStack borderWidth={1} borderColor="#e1e1e1" color="#c7c7c7" px={15} borderRadius={4} boxShadow={myBoxShadow1} jc="center" ai="center">
        <Brain size="$1" color="#c7c7c7" />
      </XStack> */}
      </XStack>
      <H1.Base mb={20} letterSpacing={0}>
        The universe is mostly made up of "up" and "down" quarks.
      </H1.Base>
      {/* elementary  */}
      <P mb={30}>
        Each one of the stars above and, in fact, almost everything else around you, yourself
        included, is just made up of those two kinds of quarks.
      </P>
      {/* italic */}
      <P mb={30}>
        Quarks have a bit of a weird charge. 2/3 for the "up" quark and -1/3 for the "down" quark.
        You can remember that "up" means positive and "down" means negative, and also that "up"
        means more charge than the "down".
      </P>

      <P mb={50}>
        So if you take two "up" quarks and one "down" quark you get a +1 positively charged
        particle, you get a proton. If you take two "down" quarks and one "up" then you get a
        neutron, a neutrally charged particle.
      </P>
      <View flexDirection={mobile ? "column" : "row"} gap={50}>
        <YStack f={1}>
          <H1.Base mb={20} textAlign="center">
            Proton - positive
          </H1.Base>
          <Image
            source={{
              uri: images.quarkSheet1_2.src,
              width: '100%',
              height: 400,
            }}
            resizeMode="cover"
            borderRadius={10}
            boxShadow={myBoxShadow1}
            mb={30}
          />
          <XStack jc="space-around">
            <H3T>UP</H3T>
            <H3T>UP</H3T>
            <H3T>DOWN</H3T>
          </XStack>
        </YStack>
        <YStack f={1}>
          <H1.Base mb={20} textAlign="center">
            Neutron - neutral
          </H1.Base>
          <Image
            source={{
              uri: images.quarkSheet2.src,
              width: '100%',
              height: 400,
            }}
            resizeMode="cover"
            borderRadius={10}
            boxShadow={myBoxShadow1}
            mb={30}
          />
          <XStack jc="space-around">
            <H3T>UP</H3T>
            <H3T>DOWN</H3T>
            <H3T>DOWN</H3T>
          </XStack>
        </YStack>
      </View>
      <P mt={100}>
        In ancient greek "protos" means "first", and that is a fitting name for the essentially
        first kind of particle in the universe. Take that proton and let it float in a never-ending
        void, this is what the universe is, mostly, a collection of protons. We call it hydrogen
        (We're simplifying a bit here). Hydrogen is just a single proton (see chart below). The
        quarks inside a proton are held together by the stong force, and actually that force sort of
        leaks out beyond the inner quarks, such that two protons would actually bind together were
        they not both positively charged. Thats is what we call the residual strong force or nuclear
        force. But they are both positively charged and hence they repel!
      </P>
      <Image
        source={{
          uri: images.chargeForce1.src,
          width: '100%',
          height: mobile ? 150 : 300,
        }}
        resizeMode="cover"
        borderRadius={10}
        boxShadow={myBoxShadow1}
        mb={30}
      />
      <Image
        source={{
          uri: images.quarksv4.src,
          width: '100%',
          height: mobile ? 200 : 400,
        }}
        resizeMode="cover"
        borderRadius={10}
        boxShadow={myBoxShadow1}
        mb={30}
      />
      {/* italic are */}
      <P mb={50}>
        However, if you were to squeeze two protons together, once sufficient force is present, one
        of those inner "up" quarks would turn into a "down" quark (don't ask me how, that probably
        requires a PhD) and that means that the proton would become a neutron (an extra charged
        particle is created for this process to conserve the overall charge). -1/3 -1/3 +2/3 = 0
        charge - a neutrally charged particle. Neutron comes from the word "neutral". In this case
        there would be no repelling charge forces, so the proton and the neutron would bind together
        due to the strong force.
      </P>
      <Image
        source={{
          uri: images.quarks2.src,
          width: '100%',
          height: mobile ? 200 : 400,
        }}
        resizeMode="cover"
        borderRadius={10}
        boxShadow={myBoxShadow1}
        mb={30}
      />
      <P>
        {' '}
        In this case we would have a hydrogen with an extra neutron which we call hydrogen-2 or
        deuterium (deu meaning 2). You can add another proton and the leaking strong force will
        still overcome the repelling force of the two protons and you will have a two proton one
        neutron particle we call helium-3, which is just one neutron shy of its most stable form,
        helium-4 or just helium.
      </P>
      <Image
        source={{
          uri: images.isotopes.src,
          width: '100%',
          height: mobile ? 300 : 800,
        }}
        resizeMode="cover"
        borderRadius={10}
        boxShadow={myBoxShadow1}
        mb={30}
      />

      <P mb={100}>
        Other combinations like helium-2 or hydrogen-4 or even double neutron particles are also
        possible, but most would decay about as fast as a photon of light would travel across the
        nucleus. If you wanted to observe such a particle, say you could accelerate and colide large
        nucleuses of atoms or have a very large atom decay into smaller parts. You would not even be
        able to detect it with a detector as it would not exist long enough to get to it. You would
        have to infer its existance from the scatering of other particles.
      </P>
      <H1.Base mb={30}>Conclusion</H1.Base>
      <P mb={50}>
        So there you go, protons and neutrons mixing together to create mostly hydrogen and helium.
        That's how everything starts. A cloud of hydrogen and helium contracts under gravity until
        it's dense enough to create a proto-star, basically something like Saturn, only without all
        of the heavier elements. Add more hydrogen till its gravity crushes it so much that the
        created heat and pressure stars fusing together the protons and you have a shining star. Let
        that star die, meaning its fusion stops and before it dies gravity will compress even
        further and then it will either stay crushed or explode creating all of the heavier elements
        that we so dearly rely on: oxygen, carbon, nitrogen and many others (all heavier elements
        above helium are refered to as metals in this context and their presense is refered to as
        metalicity).
      </P>
      <H1.Base mb={100}>
        All of those new elements, still just a collection of protons and neutrons, which are made
        out of those two elementary particles: "up" and "down" quarks.
      </H1.Base>
      <H1.Base>Extra fact:</H1.Base>
      <P>
        Recently an AI was trained to reevaluate all of the 30 years of data that particle
        accelerators have collected around the world and create thousands of models that would try
        to fit that data to come up with the best model for a proton. The conclution, with a pretty
        high certainty was that the proton sometimes behaves as if it was made up of 3 quarks and
        sometimes as if it was made up of 5 quarks. Two "up", two "down" and one "strange" quark.
        The strange quark is a bit like the down quark, but a bit heavier.
      </P>
      <Anchor href="https://www.youtube.com/watch?v=TbzZIMQC6vk&ab_channel=PBSSpaceTime">
        Proton AI video
      </Anchor>
    </YStack>
  )
}
export const SectionMain = () => {
  const media = useMedia()

  return (
    <YStack w="100%" maxWidth={1200} m="auto" px={10} {...borderX}>
      <YStack w="100%" maxWidth={800} m="auto" pt={media.xs ? 0 : 0} pb={200}>
        <SectionMainContent mobile={media.xs} />
      </YStack>
    </YStack>
  )
}
export const SectionFoot = () => {
  const mobile = useMedia().xs
  return (
    <YStack borderTopWidth={2} borderTopColor="$faint" px={mobile ? 10 : 40}>
      <YStack maxWidth={1200} w="100%" m="auto" py={100}>
        {/* <P>Home</P> */}
      </YStack>
    </YStack>
  )
}
