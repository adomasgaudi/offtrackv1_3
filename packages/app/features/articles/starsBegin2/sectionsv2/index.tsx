import { Paragraph, YStack, useMedia } from '@my/ui'
import { H1, P } from '../partsv2/comps'

export const SectionTop = () => {
  return (
    <YStack px={10} borderBottomWidth={2}>
      <YStack maxWidth={1200} w="100%" m="auto" py={5}>
        <P>Written by Adomas G.</P>
      </YStack>
      <YStack maxWidth={1200} w="100%" m="auto" py={200}>
        <H1.Color>
          Stars for beginners <br />
          Stars are hydrogen
        </H1.Color>
        <P color="$accentl4">2024 FEB</P>
      </YStack>
    </YStack>
  )
}

const SectionMainContent = ({ mobile }) => (
  <YStack>
    <H1.Base mb={20} >Brown Dwarfs</H1.Base>
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
    <YStack w="100%" maxWidth={800} m="auto" pt={media.xs ? 100 : 200} pb={200} px={10}>
      <SectionMainContent mobile={media.xs} />
    </YStack>
  )
}
export const SectionFoot = () => {
  return (
    <YStack borderTopWidth={2} px={10}>
      <YStack maxWidth={1200} w="100%" m="auto" py={100}>
        <P>Home</P>
      </YStack>
    </YStack>
  )
}
