import { Anchor, Button, H1, H2, H3, H4, Image, H5, Separator, SizableText, Tabs, XStack, YStack, isWeb  } from '@my/ui'
import { P1, P2 } from './comps'
import images from '../../../../Images'
import { useState } from 'react'
import type { TabsContentProps } from 'tamagui'

const HorizontalTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width="100%"
      minHeight="300px"
      borderRadius="2px"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
      >
        <Tabs.Tab flex={1} value="brown">
          <SizableText fontFamily="$body">Brown Dwarfs</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Red Dwarfs</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab3">
          <SizableText fontFamily="$body">Main Sequence</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="brown">
      <YStack>
          <P2>
            The smallest stars are brown drawfs, and they are not even able to burn hydrogen
            propperly. They are not able because they are small and don't have enough mass
            for its gravity to crush the protons together, remember, protons repel. So they
            are small and very faint. The first one was only discovered 30 years ago in
            1994. About at the same time as the first exoplanet discoveries. They are also
            known as M class or Y class stars
          </P2>
          <P2>
            Small things are rarely interesting, because they do not have enough gravity.
            Gravity is the key in all of the fun in astronomy. It never stops, always
            crushing things until they do something interesting. All objects given time and
            opportunity change into more stable configurations. A coin, placed on its side
            side will likely tip over to the one of its sides, but not vice verca. That is
            the principle of entropy. Its just more likely for things to go into more stable
            forms than the opposite. And if you had a billion coins, all placed on their
            side and then you had an earthquake, then the probability of all of those coins
            remaining on their sides approaches zero. This is what happens is space as well.
            Hydrogen is not the most stable way that protons can exist in. Iron is. Hence,
            given enough time and if there weren't more stable configurations like black
            holes, then all matter in the universe would approach being 100% iron. Gravity
            is the agitator in this cosmic play. It never stops, its always there, you
            cannot have an anti-gravity like charge has positive and negative. There is no
            negative in gravity, it just always attracts and crushes things, and that is why
            we get increasingly more interesting developments with increasing stellar mass.
          </P2>
        </YStack>
      </TabsContent>

      <TabsContent value="tab2">
      <YStack>
      <P2>
            The second smallest star is a Red dwarf. These stars are massive enough
            to fuse hydrogen, however they do not do so quickly. These stars can burn for a 1000
            times longer than our sun. The difference between them and "real" stars is more apearent
            in their celestial death. After the hydrogen is used up, bigger stars can start to fuse
            helium into heavier elements, but a red dwarf is not that interesting. They are not massive
            enough to fuse helium and so when the hydrogen runs out, there is no inner "exploding"
            push and the stars gravity crushes itself into a small helium white drawf. While
            crushing the star of course heats up, hence the white color. All objects heat up as they
            are crushed, the same way your bike pump heats up when you're crushing the air inside of
            it. As things fall under gravity, their speed increases and that speed creates friction.
            Friction heats thigs up. And so now you have an earth size object with almost all of the
            mass of the original star, so its much much denser and much hotter too. This would be
            cause for some interesting reactions, interactions, but not in a red dwarf. The white
            drawfs they create are not dense, hot and massive enough to do something interesting.
            Although white dwarfs are of course interesting just by themselves.
          </P2>
        </YStack>
      </TabsContent>

      <TabsContent value="tab3">
      <YStack>
      <P2>
            Next up we have main sequence stars. Like our sun, these stars are much more massive,
            and so they hydrogen fusion is happens much more quickly. They only live for a few to a
            100 billion years and most interestingly when they exhaust the hydrogen in their core
            the starts to fuse helium into higher elements. To burn the helium the stars core
            contracts and increases in density and temperature while the heat from the core starts
            hydrongen fusion in the layers next to the core which then blow up the outter layers of
            the star and as the outter layers expand they become colder, hence the star looks red
            not yellow and much much bigger. When the sun goes through this process it might even
            reach mars orbit, engulfing the earth.
          </P2>
        </YStack>
      </TabsContent>
    </Tabs>
  )
}


const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}

export const SectionText = () => {
  const [selectedLevel, setSelectedLevel] = useState(1)
  const [starType, setStars] = useState('brown')

  const handleLevelClick = (level) => {
    setSelectedLevel(level)
  }
  const handleStarClick = (star) => {
    setStars(star)
  }
  return (
    <>
      <H2 mb={50}>
        All stars are just spheres of hydrogen burning into helium under the pressure of gravity.
      </H2>
      {/* <Image
        source={{
          uri: images.browndwarf.src,
          width: 100,
          height: 100,
        }}
      /> */}
      {/* <Spline scene="https://prod.spline.design/jcIzW9sBKzDcNEdL/scene.splinecode" /> */}
      <YStack>
        <P2>
          Hydrogen being single protons and helium being a few protons that binded together and
          converted into a mix of neutrons and protons in the process. The smallest star and the
          biggest is basically the same thing. The only difference is how fast it burns hydrogen
          into helium.
        </P2>
        <H3 mb={50}>
          We will next cover the types of stars differentiated by mass. First brown dwarfs, then red
          dwarfs then main sequence stars like the sun and then some giants.
        </H3>
        {/* <XStack gap={5}>
          <Button
            onPress={() => handleStarClick('brown')}
            bg={starType === 'brown' ? 'gray' : 'white'}
          >
            Brown Dwarfs
          </Button>
          <Button onPress={() => handleStarClick('red')} bg={starType === 'red' ? 'gray' : 'white'}>
            Red Dwarfs
          </Button>
          <Button
            onPress={() => handleStarClick('main')}
            bg={starType === 'main' ? 'gray' : 'white'}
          >
            Main Sequence Stars
          </Button>
          <Button
            onPress={() => handleStarClick('giant')}
            bg={starType === 'giant' ? 'gray' : 'white'}
          >
            Giants
          </Button>
        </XStack> */}
        <HorizontalTabs /> 
        {/* {starType === 'brown' && (
          <>
            {selectedLevel === 1 && (
              <XStack>
                
                <YStack>
                  <Button
                    onPress={() => handleLevelClick(1)}
                    style={selectedLevel === 1 ? { backgroundColor: 'gray' } : {}}
                  >
                    Level 1
                  </Button>
                  <Button
                    onPress={() => handleLevelClick(2)}
                    style={selectedLevel === 2 ? { backgroundColor: 'gray' } : {}}
                  >
                    Level 2
                  </Button>
                </YStack>
              </XStack>
            )}{' '}
          </>
        )} */}
        {/* {starType === 'brown' && (
          <YStack>
          <P2>
            The smallest stars are brown drawfs, and they are not even able to burn hydrogen
            propperly. They are not able because they are small and don't have enough mass
            for its gravity to crush the protons together, remember, protons repel. So they
            are small and very faint. The first one was only discovered 30 years ago in
            1994. About at the same time as the first exoplanet discoveries. They are also
            known as M class or Y class stars
          </P2>
          <P2>
            Small things are rarely interesting, because they do not have enough gravity.
            Gravity is the key in all of the fun in astronomy. It never stops, always
            crushing things until they do something interesting. All objects given time and
            opportunity change into more stable configurations. A coin, placed on its side
            side will likely tip over to the one of its sides, but not vice verca. That is
            the principle of entropy. Its just more likely for things to go into more stable
            forms than the opposite. And if you had a billion coins, all placed on their
            side and then you had an earthquake, then the probability of all of those coins
            remaining on their sides approaches zero. This is what happens is space as well.
            Hydrogen is not the most stable way that protons can exist in. Iron is. Hence,
            given enough time and if there weren't more stable configurations like black
            holes, then all matter in the universe would approach being 100% iron. Gravity
            is the agitator in this cosmic play. It never stops, its always there, you
            cannot have an anti-gravity like charge has positive and negative. There is no
            negative in gravity, it just always attracts and crushes things, and that is why
            we get increasingly more interesting developments with increasing stellar mass.
          </P2>
        </YStack>
        )}
        {starType === 'red' && (
          <P2>
            So, continuing, the second smallest star is a Red dwarf. These stars are massive enough
            to fuse hydrogen, however they do not do so quickly. These stars can burn for a 1000
            times longer than our sun. The difference between them and "real" stars is more apearent
            in their celestial death. After the hydrogen is used up, bigger stars can start to fuse
            helium into heavier elements, but Red dwarf are not so interesting. The are not massive
            enough to fuse helium and so when the hydrogen runs out, there is no inner "exploding"
            push and the stars gravity crushes itself into a small helium white drawf. While
            crushing the star of course heats up, hence the white color. All objects heat up as they
            are crushed, the same way your bike pump heats up when you're crushing the air inside of
            it. As things fall under gravity, their speed increases and that speed creates friction.
            Friction heats thigs up. And so now you have an earth size object with almost all of the
            mass of the original star, so its much much denser and much hotter too. This would be
            cause for some interesting reactions, interactions, but not in a red dwarf. The white
            drawfs they create are not dense, hot and massive enough to do something interesting.
            Although white dwarfs are of course interesting just by themselves.
          </P2>
        )}
        {starType === 'main' && (
          <P2>
            Next up we have main sequence stars. Like our sun, these stars are much more massive,
            and so they hydrogen fusion is happens much more quickly. They only live for a few to a
            100 billion years and most interestingly when they exhaust the hydrogen in their core
            the starts to fuse helium into higher elements. To burn the helium the stars core
            contracts and increases in density and temperature while the heat from the core starts
            hydrongen fusion in the layers next to the core which then blow up the outter layers of
            the star and as the outter layers expand they become colder, hence the star looks red
            not yellow and much much bigger. When the sun goes through this process it might even
            reach mars orbit, engulfing the earth.
          </P2>
        )}
        {starType === 'giant' && (
          <YStack>
            <P2>
              So from this average mass star we get a nice red giant phase, but something even more
              interesting happens when the star is even more massive. Explosions!
            </P2>
            <P2>
              If the sun was about 8 times as massive, the core collapse after it was done fusing
              hydrongen into helium and helium into other elements all the way to iron. Then it
              would contract and explode into a supernova.{' '}
            </P2>{' '}
          </YStack>
        )} */}
      </YStack>
      {/* <P2>
          Four separate protons trying to merge and change into a nucleus of 2 protons and 2
          neutrons. Imagine a gas cloud the mass of Saturn collapsing to form a planet. That planet
          as well as the biggest star is mostly the same stuff - single proton atoms also known as
          hydrogen. You can keep adding protons, doubling its mass and it will contract and heat up
          under the increasing gravity, but it will not be hot enough to fuse hydrogen into helium
          untill its about 80 times the mass of Jupiter. If the objects mass is between 14 to 80
          Jupiter masses, we call that a failed star, as it cannot really use the most abundant fuel
          in the universe - hydrogen, it can only fuse stuff that's already partially fused from the
          big bang and so doesn't really ignite properly nor can it sustain its fake fusion for
          long. Its barely detectable even with the best telescopes. If its less than that tThe star
          is still hot from the friction of all of the gass falling in under gravity, but is small
          and faint, about a 100 000 times less bright than then sun, which is about as bright as
          the moon is.
        </P2> */}
    </>
  )
}
