import { Anchor, H1, H2, H3, H4, Image, XStack, YStack } from '@my/ui'
import { P1, P2 } from './comps'
import images from '../../../../Images'

export const SectionText = () => {
  return (
    <>
      <H2 mb={20} letterSpacing={0}>
        All stars are just spheres of hydrogen buring into helium under the pressure of gravity. 
      </H2>
      <P2>Four separate protons trying to merge and change into a nucleus of 2 protons and 2 neutrons. Imagine a gas cloud the mass of Saturn collapsing to form a planet. That planet as well as the biggest star is mostly the same stuff - single proton atoms also known as hydrogen. You can keep adding protons, doubling its mass and it will contract and heat up under the increasing gravity, but it will not be hot enough to fuse hydrogen into helium untill its about 80 times the mass of Jupiter. If the objects mass is between 14 to 80 Jupiter masses, we call that a failed star, as it cannot really use the most abundant fuel in the universe - hydrogen, it can only fuse stuff that's already partially fused from the big bang and so doesn't really ignite properly nor can it sustain its fake fusion for long. Its barely detectable even with the best telescopes. If its less than that tThe star is still hot from the friction of all of the gass falling in under gravity, but is small and faint, about a 100 000 times less bright than then sun, which is about as bright as the moon is. </P2>
      <P2></P2>
      {/* <P2 mb={30}>
        Each one of the stars above and, in fact, almost everything else around you, yourself
        included, is just made up of those two quarks.
      </P2>
      <P2 mb={30}>
        Quarks have a bit of a weird charge. 2/3 for the up quark and -1/3 for the down one. You can
        remember that "up" means positive and "down" means negative, and also that "up" means more
        of charge than the "down".
      </P2>
      <P2 mb={50}>
        So if you take two "up" quarks and one "down" quark you get a +1 positively charged
        particle, you get a proton. If you take two "down" quarks and one "up" then you get a
        neutron, a neutrally charged particle.
      </P2>
      <XStack gap={50}>
        <YStack f={1}>
          <H2 mb={20} textAlign="center">
            Proton - positive
          </H2>
          <Image
            source={{
              uri: images.quarkSheet1_2.src,
              width: '100%',
              height: 400,
            }}
          />
          <XStack jc="space-around">
            <H3>UP</H3>
            <H3>UP</H3>
            <H3>DOWN</H3>
          </XStack>
        </YStack>
        <YStack f={1}>
          <H2 mb={20} textAlign="center">
            Neutron - neutral
          </H2>
          <Image
            source={{
              uri: images.quarkSheet2.src,
              width: '100%',
              height: 400,
            }}
          />
          <XStack jc="space-around">
            <H3>UP</H3>
            <H3>DOWN</H3>
            <H3>DOWN</H3>
          </XStack>
        </YStack>
      </XStack>
      <P2 mt={100}>
        Etymologically "protos" means "first", and that is a fitting name for the essentially first
        kind of particle in the universe. Take that proton and let it float in a never-ending void,
        this is what the universe is, mostly, a collection of protons. We call it hydrogen (We're
        simplifying a bit here). The quarks inside a proton are held together by the stong force,
        and actually that force sort of leaks out beyond the inner quarks, such that two protons
        would actually bind together were they not both positively charged.
      </P2>
      <Image
        source={{
          uri: images.chargeForce1.src,
          width: '100%',
          height: 300,
        }}
      />
      <Image
        source={{
          uri: images.quarksv4.src,
          width: '100%',
          height: 400,
        }}
      />
      <P2 mb={50}>
        But they are both positively changed and hence they repel. However, if you were to squeeze
        two protons together, once sufficient force is present, one of those inner "up" quarks would
        turn into a "down" quark (don't ask me how, that probably requires a PhD) and that means
        that the proton would become a neutron (an extra charged particle is created for this
        process to conserve the overall charge). -1/2 -1/2 +2/3 = 0 charge - a neutrally charged
        particle. Neutron from the word "neutral". In this case there would be no repeling charge
        forces, so the proton and the neutron would bind together.
      </P2>
      <Image
        source={{
          uri: images.quarks2.src,
          width: '100%',
          height: 400,
        }}
      />
      <P2>
        {' '}
        In this case we would have a hydrogen with an extra neutron which we call hydrogen-2 or
        deuterium (deu meaning 2). You can add another proton and the leaking strong force will
        still overcome the repelling force of the two protons and you will have a two proton one
        neutron particle we call helium-3, which is just one neutron shy of its most stable form
        helium-4 or just helium.
      </P2>
      <Image
        source={{
          uri: images.isotopes.src,
          width: '100%',
          height: 800,
        }}
      />
      <P2>
        Other combinations like Helium-2 or Hydrogen-4 or even double neutron particles are also
        possible, but most would decay about as fast a photon of light would travel across the
        nucleus. If you wanted to observe such a particle, say you could accelerate and colide large
        nucleuses of atoms or have a very large atom decay into smaller parts. You would not even be
        able to detect it with a detector as it would not exist long enough to get to it. You would
        have to infer its existance from the scatering of other particles.
      </P2>
      <P2 mb={50}>
        So there you go, protons and neutrons mixing to create mostly hydrogen and helium. That's
        how everything starts. A cloud of hydrogen and helium contracts under gravity until its
        dense enough to create a proto-star, basically something like saturn, only without all of
        the heavier elements. Add more hydrogen till its gravity crushes it so much that the created
        heat and pressure stars fusing together the protons and you have a shining star. Let that
        star die, meaning its fusion stops and before it dies gravity will compress even further and
        then it will either stay crushed or explode creating all of the heavier elements that we so
        dearly rely on: oxygen, carbon, nitrogen and many others (all heavier elements above helium
        are refered to as metals in this context and their presense is refered to as metalicity).
      </P2>
      <H2 mb={100}>
        All of those new elements, still just a collection of protons and neutrons, which are made
        out of those two elementary particles: "up" and "down" quarks.
      </H2>
      <H4>Extra fact:</H4>
      <P2>
        Recently an AI was trained to reevaluate all of the 30 years of data that particle
        accelerators have collected around the world and create thousands of models that would try
        to fit that data to come up with the best model for a proton. The conclution, with a pretty high certainty was that the proton sometimes behaves as if it was made up of 3 quarks and sometimes as if it was made up of 5 quarks. Two "up", two "down" and one "strange" quark. The strange quark is a bit like the down quark, but a bit heavier.
      </P2>
      <Anchor href="https://www.youtube.com/watch?v=TbzZIMQC6vk&ab_channel=PBSSpaceTime">
        Proton AI video
      </Anchor> */}



      {/* <P2>
        10 by attracting the surrounding gas and you get something of a similar size but much dense
        something like a jupyter. 10x mass and the pressures and density inside become high enough
        to heat up the hole planet/proto star. 10x and you get fusion. 10x that you get a sun. 10x
        you get a blue giant 10x and you get as massive as stars can het
      </P2> */}
      {/* <P2 mb={50} >
        If it's night, go out and look up at the sky. What you're seeing are stars that are 4 ly to
        10000 ly away. There are no stars closer than 4 ly and if you're seeing something that's
        further than 10000 ly away its likely a cluster of stars or it coudl be an entire galaxy. If
        you looked at the sky like that and catalogued all of the existing stars you would see the
        the sky is mosly made up of bigger stars, where the sun would be one of the smaller
        examples. If you the decided to use binoculars or even a propper telescope, you would
        quickly realise that the galaxy is mostly made up of much smaller stars.
      </P2>
      <P2 mb={50}>
        Red dwarf stars dominate by the numbers. About 70% of the stars in our galaxy are red dwarfs
        and if we could see non-luminous objects we would probably find that there are even more of
        those than anything else.
      </P2> */}
    </>
  )
}
