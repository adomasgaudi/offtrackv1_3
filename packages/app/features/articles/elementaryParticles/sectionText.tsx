import { Anchor, H1, H2, H3, H4, Image, XStack, YStack } from '@my/ui'
import { P1, P2 } from './comps'
import images from '../../../../Images'

export const SectionText = () => {
  return (
    <>
      <H2 mb={20} letterSpacing={0}>
        All stars are just spheres of hydrogen buring into helium under the pressure of gravity. 
      </H2>
      <P2>You can think of the universe as made up of particles and waves. Particles colide, waves can pass through eachother and interfere, either building on top of eachother or anihiliting eachother. Although, unfortunatelly, this is far from the whole story and not even an accurate analogy, I think starting from here gives a solid foundation that you can later dismantle. </P2>
      <P2>Physicists call everything particles, because because they many can behave as both particles and waves. The particles that are supposed to act like waves are called Bozons. Named for the great Indian physicist Satyendra Nath Bose, who, interestingly, together with Einstein discovered the einstein-boze condensate, which makes particles act like waves when cooled down to extremely low temperatures. The particles that are supposed to act like particles are called Fermions, for the great physicist Enrico Fermi. And they didn't give those names to the particles themselves, if you think that maybe that's a bit self-absorbed, no, it was Paul Dirac that coined the terms and gave the names of these scientists to comemorate their legendary contributions.</P2>
      <P2>Fermions are either quarks or leptons. They have mass, charge and can also have a color-charge or not. They are the mass, the matter that we see around us. Bozons are a bit complex, *-*-*-*-but I would just imagine them as massless and chargless, however they can have momentum. </P2>
    
    </>
  )
}
