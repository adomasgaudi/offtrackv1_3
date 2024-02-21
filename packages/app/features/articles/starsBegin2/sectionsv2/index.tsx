import { Paragraph, YStack, useMedia, Text } from '@my/ui'
import { H1, P } from '../partsv2/comps'
const decorPR = {
  textDecorationStyle: 'dashed',
  textDecorationLine: 'underline',
  textDecorationColor: '$accentl1',
}
const brP = {
  borderRightWidth: 2,
  borderRightColor: '$accentl1',
  pr: 10,
}
const borderX = {
  borderRightWidth: 1,
  borderRightColor: '#e7e7e7',
  borderLeftWidth: 1,
  borderLeftColor: '#e7e7e7',
}
export const SectionTop = () => {
  const mobile = useMedia().xs
  
  return (
    <YStack px={mobile ? 10 : 40} borderBottomWidth={2}>
      <YStack maxWidth={1200} px={10} w="100%" m="auto" py={5} {...borderX}>
        <P>Written by Adomas G.</P>
      </YStack>
      <YStack maxWidth={1200} w="100%" m="auto" py={200} {...borderX}>
        {mobile && (
          <YStack>
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
      </YStack>
    </YStack>
  )
}

const SectionMainContent = ({ mobile }) => (
  <YStack>
    <H1.Base mb={20}>Brown Dwarfs</H1.Base>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vel tempora ipsa illum non
      harum doloribus dicta sequi, molestiae minus deserunt eveniet quas nostrum eaque fugit
      voluptas tenetur illo porro, nulla iste nam, sed ex ratione recusandae? Incidunt nostrum
      perspiciatis delectus sit neque quis distinctio, doloremque, aut expedita ullam nulla
      molestias esse laborum suscipit aspernatur non quasi, beatae quia ducimus eveniet! Ab sit
      aliquam voluptatem exercitationem unde impedit expedita reprehenderit neque repellat quasi.
      Est pariatur, voluptatum architecto enim repellat ullam odio iste vero nobis sint tenetur
      eaque omnis iusto ab ad sunt praesentium cumque mollitia dolorem minus ratione neque odit.
    </P>
  </YStack>
)
export const SectionMain = () => {
  const media = useMedia()
  
  return (
    <YStack w="100%" maxWidth={1200} m="auto" px={10} {...borderX}>
      <YStack w="100%" maxWidth={800} m="auto" pt={media.xs ? 100 : 200} pb={200}>
        <SectionMainContent mobile={media.xs} />
      </YStack>
    </YStack>
  )
}
export const SectionFoot = () => {
  const mobile = useMedia().xs
  return (
    <YStack borderTopWidth={2} px={mobile ? 10 : 40}>
      <YStack maxWidth={1200} w="100%" m="auto" py={100}>
        <P>Home</P>
      </YStack>
    </YStack>
  )
}
