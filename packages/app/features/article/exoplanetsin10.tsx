import { Button, H1, H3, H4, Paragraph, Separator, Theme, XStack, YStack, Image, useMedia, styled } from '@my/ui';
import { ChevronLeft } from '@tamagui/lucide-icons';
import React from 'react';
import { createParam } from 'solito';
import { useLink } from 'solito/link';
import img from '../../../../packages/Images';

const { useParam } = createParam<{ id: string }>();
const RedBox = ({ title, linkProps }) => (
  <YStack w={300} h={300} bg="#ff7272" p={10} jc="center" m={5}>
    <H3>{title}</H3>
    <Button {...linkProps}>Read</Button>
  </YStack>
);
export const P1 = styled(Paragraph, {
  name: 'ParSkill',
  fontWeight: 'semi-bold',
  fontSize: 20
})
export default function ArticleExo10() {
  
  const linkProps = useLink({
    href: '/',
  });
  const media = useMedia();

  return (
    <Theme name="dark">
      <YStack w="100%" h="100%" bc="$background">
      
        <YStack maxWidth={1200} w="100%" mx="auto" borderColor="$blue1Dark" >
          <Paragraph p="$4" fontWeight="bold">
            Built by Adomas Gaudiesius
          </Paragraph>
          <XStack>
              <Button {...linkProps}>Home</Button>
          </XStack>
          <YStack f={1} mt="$10" jc="center" p="$4" space>
            <YStack space="$4" minHeight={200}>
              <H1 
                mb={100} 
                fontSize={media.sm ? 30 : undefined} 
                letterSpacing={"normal"}
              >
               Quick intro to the stars
              </H1>
              <H4>What the universe is (mostly)</H4>
              <Paragraph fontWeight="bold">2024 Jan</Paragraph>
            </YStack>
          </YStack>
        </YStack>

        <Theme name="light">
          <YStack w="100%" h="100%" bc="$background">
            <Separator />

            <YStack w="100%" minHeight={300} bg="$background">
              <YStack maxWidth={1200} w="100%" mx="auto" py={100} p="$4">
                <YStack my={100} maxWidth={800}>
                  <H3>The universe, is mostly made up of UP and DOWN quarks.</H3>
                  <P1 mb={50}>
                     Each one of those stars and in fact almost everything around you, yourself included is just made up of those two quarks. Quarks have a bit of a weird charge. 2/3 for the UP quark and -1/2 for the DOWN one. You can remember that "up" means positive and "down" means negative, and the "up" means more charge than the "down". So if you take two UP quarks and one DOWN quark you get a +1 positively changed particle, you get a proton. Etymologically "protos" means "first", and that is a fitting name for the essentially first kind of particle in the universe, the proton. Take that proton and let it float in a gravitationless void, this is what the universe is, mostly, a collection of protons. We call it hydrogen (We're simplifying a bit here). The quarks inside a proton are held together by the stong force, and actually that force sort of leaks out beyond the inner quarks, such that two protons actually would bind together were they not both positively charged. But they are both positively changed and hence they repel. However, if you were to squeeze two protons together, one sufficient force is present, one of those inner "up" quarks would turn into a "down" quark and that means that the proton would become a neutron (an extra charged particle is created neede for this process to conserve the overall charge). -1/2 -1/2 +2/3 = 0 charge - a neutrally charged particle. Neutron from the word "neutral". In this case there are no repeling charge forces and the proton and neutron would bind together and we would have a hydrogen with an extra neutron which we call hydrogen-2 or deuterium (deu meaning 2). You can add another proton and the leaking strong force will still overcome the repelling force of the two protons and you will have a two proton one neutron particle we call helium-3, which is just one neutron shy of its most stable form helium-4 or just helium.
                    
                    
                  </P1>
                      <P1 mb={50}>So there you go, protons and neutrons mixing to create mostly Hydrogen and Helium. That how everything starts. A cloud of Hydrogen and Helium contracts under gravity until its dense enough to create a proto-star, basically something like saturn, only without everything all of the heavier elements. Incease the mass by 10 by attracting the surrounding gas and you get something of a similar size but much dense something like a jupyter. 10x mass and the pressures and density inside become high enough to heat up the hole planet/proto star. 10x and you get fusion. 10x that you get a sun. 10x you get a blue giant 10x and you get as massive as stars can het
                      </P1>
                  <P1 mb={50} fontSize={20} fontWeight="semi-bold">
                    If it's night, go out and look up at the sky. What you're seeing are stars that are 4 ly to 10000 ly away. There are no stars closer than 4 ly and if you're seeing something that's further than 10000 ly away its likely a cluster of stars or it coudl be an entire galaxy. If you looked at the sky like that and catalogued all of the existing stars you would see the the sky is mosly made up of bigger stars, where the sun would be one of the smaller examples. If you the decided to use binoculars or even a propper telescope, you would quickly realise that the galaxy is mostly made up of much smaller stars. 
                  </P1>
                  <P1 mb={50}>
                    Red dwarf stars dominate by the numbers. About 70% of the stars in our galaxy are red dwarfs and if we could see non-luminous objects we would probably find that there are even more of those than anything else. 
                  </P1>
                  <Image
                    source={{
                      uri: img.stars.src,
                      width: 200,
                      height: 300,
                    }}
                  />
                 
                 
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
  );
}
