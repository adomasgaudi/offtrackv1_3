import {
  Button,
  H1,
  H4,
  Paragraph,
  Separator,
  Theme,
  XStack,
  YStack,
  useMedia,
  styled,
} from '@my/ui'
import { useLink } from 'solito/link'

import { SectionText } from './sectionText'
import ArticleStars1v2 from '../starsBegin1v2'


export const P1 = styled(Paragraph, {
  name: 'ParSkill',
  fontWeight: 'semi-bold',
  fontSize: 20,
})
const ArticleStarsBegin1 = () => {
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
          <XStack p={18}>
            <Button bg="#37b35e" {...linkProps} size="$3">
              Home
            </Button>
          </XStack>
          <YStack f={1} mt="$10" jc="center" p="$4" space>
            <YStack space="$4" minHeight={200}>
              <H1 mb={100} fontSize={media.sm ? 30 : undefined} letterSpacing={'normal'}>
                Stars for beginners - Mostly everything is this
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


export default ArticleStars1v2