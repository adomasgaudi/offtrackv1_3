import { Button, H1, H3, H4, Paragraph, Separator, Theme, XStack, YStack, useMedia } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export default function ArticleBody() {
  
  const linkProps = useLink({
    href: '/',
  })
  const media = useMedia()

  return (
        <Theme name="carnation2">
      <YStack w="100%" h="100%" bc="$background"   >
      
      <YStack maxWidth={1200} w="100%" mx="auto" borderColor="$blue1Dark" >
        <Paragraph p="$4" fontWeight="bold" >
          Built by Adomas Gaudiesius
        </Paragraph>
        <YStack f={1} mt="$10" jc="center" p="$4" space >
          <YStack space="$4" minHeight={200} >
            <H1 
              mb={100} 
              fontSize={media.sm ? 30 : undefined} 
              letterSpacing={"normal"}
            >
             How gym is fun for me now
            </H1>
            <H4>Let's talk about superposition</H4>
            <Paragraph fontWeight="bold">2024 Jan</Paragraph>
          </YStack>
         
      </YStack>
      </YStack>
        
      <Theme name="light" >
      <YStack w="100%" h="100%" bc="$background"   >
      <Separator></Separator>

        <YStack  w="100%" minHeight={300} bg="$background" >
          <YStack maxWidth={1200}  
            w="100%" mx="auto" py={100}
            p="$4"
            >
            <YStack my={100} maxWidth={800}>
              <H3>Superposition is misleading</H3>
              <Paragraph mb={50}>Superposition is often described in a way that is very mysterious first of all there is the concept of the collapse of the wave function which suggests that it happens upon measurement and the way it is told especially with Schrodinger's cat is that it happens when we look at it which I understand that it sounds provocative and I do understand the use of that provocation but it is also misleading because it is misleading if you leave out the other facts the fact that a superposition can collapse from an interaction with a photon regardless of who's looking or not who's measuring or not the idea of looking and measuring is in a physical sense uncategorizable what does it mean to look or measure if it means to interact then this description holds no meaning because anything can interact with anything so it really tells you nothing when in fact it should be telling you about the type of interaction that collapses a superposition.</Paragraph>
              <H3>Schrodinger's cat</H3>
              <Paragraph mb={50}>The Schrodinger's cat thought experiment was I think created by Schrodinger as a way to give an absurd example that would obviously be not true and the absurdity of a cat being literally dead and alive in a superposition of both at the same time which would collapse into one state upon measurement is so absurd that it became popular but again there is a gross misunderstanding of how a superposition is created and how it collapses in fact if you were to create a real Schrodinger's cap in a box that is in an actual superposition that would be an incredibly complex task of insane level of isolation thermal isolation of somehow managing to cool the cat to extremely cold temperatures and altering its physical state in that temperature in a way that would when heat it up again would cause the cat to be dead or alive um I heard one quantum physicist say that quantum physics is the science of the very cold the very small or the very isolated or something any kind of interaction that is smaller than the radius then the width of the wave function of an object will causeway it will causeway the wave function to shrink so Do not have any large scale small scale interactions with an object the size of a cat is so unfathomably difficult old no not impossible but a normal cat could not be in a super position it would have to be altered.</Paragraph>
              <H3>Superposition collapse</H3>
              <Paragraph mb={50}>When an object in superposition first of all any quantum object that is not interacting with anything will have more and more superpositions over time it is the consequence of entropy an object moving through space and interacting weekly to its surroundings in a way think of it like the chaos theory there is this apparatus that you can hold it very in the same position but when you release it it starts swinging in different directions and soon it becomes chaos and it never swings in the same way equally the most tiniest differences will overtime spread and the state of an object the quantum state will have more and more possibilities now when that object interacts with something more strongly more specifically then it will have to choose an outcome so for example if a photon is approaching an area where an electron could be and it passes through that area if it passed through an area the electron has to decide if it made contact or not if it has not made contact the area in which it would have made contact now cannot have a possibility of holding an electron hence the wave function of the electron changed even though it didn't hit the photon its area of amplitude did hit the photon and therefore changed Now in an alternate universe that photon actually hit the electron which has happened to live in a world where that didn't happen so the photon is in a superposition I don't know</Paragraph>
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
