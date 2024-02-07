import { H1, H2, H3, Paragraph, Square, Theme, YStack, styled, useMedia, Image, XStack, Button } from '@my/ui'
import { ArticleBox, ArticleBoxSM, Layout1, P1 } from '../../components'
import images from '../../../Images'
import { useLink } from 'solito/link'

const ARTICLES = [
  {
    title: 'Star types: universe composition',
    titleMobile: 'Star types: universe composition',
    text: `Each one of those stars and in fact almost everything around you, yourself included is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP
    quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down"
    means negative, and the "up" means more charge than the "down". So if you take two UP...`,
    textMobile: `Each one of those stars and in fact almost everything around you, yourself included is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP
    quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down"
    means negative, and the "up" means more charge than the "down". So if you take two UP...`,
    image: images.quarks.src,
  },
  {
    title: 'Star types: universe composition',
    titleMobile: 'Star types: universe composition',
    text: `Each one of those stars and in fact almost everything around you, yourself included is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP
    quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down"
    means negative, and the "up" means more charge than the "down". So if you take two UP...`,
    textMobile: `Each one of those stars and in fact almost everything around you, yourself included is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP
    quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down"
    means negative, and the "up" means more charge than the "down". So if you take two UP...`,
    image: images.quarks.src,
  },
  {
    title: 'Star types: universe composition',
    titleMobile: 'Star types: universe composition',
    text: `Each one of those stars and in fact almost everything around you, yourself included is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP
    quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down"
    means negative, and the "up" means more charge than the "down". So if you take two UP...`,
    textMobile: `Each one of those stars and in fact almost everything around you, yourself included is
    just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP
    quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down"
    means negative, and the "up" means more charge than the "down". So if you take two UP...`,
    image: images.quarks.src,
  },
]

const Mobile = () => {
  return (
    <Layout1>
      {ARTICLES.map((article, index) => (
        <ArticleBoxSM key={index} my={200} mx={4}>
          <YStack>
            <H1>{article.titleMobile}</H1>
            <P1>{article.textMobile}</P1>
          </YStack>
        </ArticleBoxSM>
      ))}
    </Layout1>
  )
}
const Desktop = () => {
  const handlePress = () => {
    console.log('pressed')
  }
  const linkProps = useLink({
    href: '/user/nate',
  })
  return (
    <Layout1>
      {ARTICLES.map((article, index) => {
        const isLastItem = index === ARTICLES.length - 1
        const isFirstItem = index === 0
        return (
          <ArticleBox
            key={index}
            mt={isFirstItem ? 200 : 20}
            mb={isLastItem ? 200 : 0}
            onPress={handlePress}
          >
            <YStack>
              <Image
                source={{
                  uri: article.image,
                  width: '100%',
                  height: 300,
                }}
              />
              <XStack>
                <Button {...linkProps}>Link to user</Button>
              </XStack>
              <H2 mb="$4">{article.title}</H2>
              <P1 mb={50}>{article.text}</P1>
            </YStack>
          </ArticleBox>
        )
      })}
    </Layout1>
  )
}

export function HomeScreen() {
  const media = useMedia()
  return <>{media.sm ? <Mobile /> : <Desktop />}</>
}
