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
} from '@my/ui'
import { ArticleBox, ArticleBoxSM, InsetShadow, Layout1, LayoutLeft, P1, P2 } from '../../components'
import images from '../../../Images'
import { useLink } from 'solito/link'

const ARTICLES = [
  {
    title: ['Stars for beginners - Mostly everything is this'],
    text: [
      `The universe, is mostly up and down quarks. Each one of the stars above and, in fact, almost everything else around you, yourself included, is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the up
    quark and -1/2 for the down one. You can remember that "up" means positive and "down"
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

const Mobile = () => {
  return (
    <Layout1>
      {ARTICLES.map((article, index) => (
        <ArticleBoxSM key={index} my={200} mx={4}>
          <YStack>
            <H1>{article.title[0]}</H1>
            <P1>{article.title[0]}</P1>
          </YStack>
        </ArticleBoxSM>
      ))}
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
  return (
    <Theme name="light2">
      <YStack bg="$background">
        <XStack w="full" h={60} mb={50} bg="#019564" jc="flex-start" ai="center" gap={200}>
          <XStack maxWidth={800} width={800} m="auto" gap={50}>
            <H4 color="white" hoverStyle={{ textDecorationStyle: 'underline' }}>
              Made by Adomas
            </H4>
          </XStack>
        </XStack>

        {/* <Image
    source={{
      uri: images.forest.src,
      width: '100%',
      height: 300,
    }}
    /> */}
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
              <ArticleBox
                key={index}
                mt={isFirstItem ? 200 : 6}
                mb={isLastItem ? 200 : 0}
                {...linkProps(article.link)}
              >
                <YStack>
                  <Image
                    source={{
                      uri: article.image,
                      width: '100%',
                      height: 300,
                    }}
                    mb="$4"
                  />
                  <H2 mb="$4">{article.title[0]}</H2>
                  <P1 mb={50}>{article.text[0]}</P1>
                </YStack>
              </ArticleBox>
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
