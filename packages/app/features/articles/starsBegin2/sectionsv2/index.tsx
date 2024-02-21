import { Paragraph, Image, YStack, useMedia, Text, XStack, Theme, Button } from '@my/ui'
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
            Stars are{' '}
            <Text bg="$accent" hoverStyle={{ bg: 'red' }} animation="slow">
              hydrogen
            </Text>
          </H1.Color>
          <P color="$accent">2024 FEB</P>
        </YStack>
      )}
      {!mobile && (
        <YStack {...brP} my={150}>
          <H1.Color textAlign="right">
            Stars are{' '}
            <Text
              bg="$accent"
              px={5}
              hoverStyle={{ bg: '$primary', color: '$color' }}
              animation="slow"
            >
              hydrogen
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
      <P mb={30}>
        There are many different objects in the galaxy, but I think that variety can confuse a bit,
        and prevent people from building a foundational understanding, that really mostly everything
        is just spheres of hydrogen. And then there are exceptions and evolutions. Take a look at
        this image.
      </P>
      <Image
        source={{
          uri: images.starsizes.src,
          width: '100%',
          height: mobile ? 200 : 400,
        }}
        resizeMode="cover"
        borderRadius={10}
        boxShadow={myBoxShadow1}
        mb={30}
      />
      <P fontFamily="$inter" fontStyle="italic" fontSize={24} my={30}>
        Mostly everything is just spheres of hydrogen. And then there are exceptions and evolutions.
      </P>
      <P mb={0}>
        This is a snapshot from UniverseSandbox game. These are all of the stars that can exist, if
        we only look at a stars that are young. When they get old, stuff happens, but in the
        beginning, they are all just 70% hydrogen, fusing into helium. Hydrogen being single protons
        and helium being a few protons that binded together and converted into a mix of neutrons and
        protons in the process. The only difference between theses is how big they are. The more
        massive the star the faster it burns and the hotter, and so their color changes from red to
        yellow to blue.
      </P>
      {/* <H1.Base mb={20} mt={100}>
        Brown Dwarfs
      </H1.Base> */}
      <H3.Base color="$color" mt={100}>
        Writting... more soon
      </H3.Base>
      {/* <P>
        The smallest stars are brown drawfs, and they are not even able to burn hydrogen propperly.
        They are not able because they are small and don't have enough mass for its gravity to crush
        the protons together, remember, protons repel. So they are small and very faint. The first
        one was only discovered 30 years ago in 1994. About at the same time as the first exoplanet
        discoveries. They are also known as M class or Y class stars
      </P> */}
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
