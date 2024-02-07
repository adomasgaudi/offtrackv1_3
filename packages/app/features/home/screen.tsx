import {
  Anchor,
  Button,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Separator,
  Sheet,
  styled,
  useMedia,
  useToastController,
  XStack,
  YStack,
  Image,
} from '@my/ui'
import { Theme } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'
import img from '../../../Images'
import { useWindowDimensions } from 'react-native'

export const PSkill = styled(Paragraph, {
  name: 'ParSkill',
  fontWeight: 'bold',
})

function Skills() {
  return (
    <>
      <Skill title="Apps" skills="React-Native Expo" />
      <Skill title="Websites" skills="React Vue Next Nuxt PHP jQuery" />
      <Skill title="Databases" skills="PHP Laravel MySQL Supabase Firebase" />
    </>
  )
}

function Skill({ title, skills }) {
  return (
    <YStack>
      <H1>{title}</H1>
      <PSkill>{skills}</PSkill>
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()
  console.log(img)

  return (
    <>
      <Button size="$6" circular onPress={() => setOpen((x) => !x)}>
        CV
      </Button>
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Warning!', {
                message: 'I sometimes forget to read emails',
              })
            }}
          />
          <ContactInfo />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

function ContactInfo() {
  return (
    <YStack>
      <H2>Curriculum Vitae</H2>
      <Image source={{ width: 650, height: 800, uri: img.agcv.src }} my={100} />
      <Paragraph ta="center">adomas.gaudi.23@gmail.com</Paragraph>
      <Paragraph ta="center">+370 61609911</Paragraph>
    </YStack>
  )
}

export function HomeScreen() {
  const media = useMedia()
  return (
    <Theme name="ebb">
      <YStack w="100%" h="100%" bc="$background">
        <YStack maxWidth={1200} w="100%" mx="auto" bc="" borderColor="$blue1Dark">
          <Paragraph p="$4" fontWeight="bold">
            Built by Adomas Gaudiesius
          </Paragraph>
          <YStack f={1} mt="$10" jc="center" p="$4" space>
            <YStack space="$4" minHeight={500}>
              <H1 mb={100} fontSize={media.sm ? 30 : undefined} letterSpacing={'normal'}>
                Full-Stack Developer <br /> Content Creator
              </H1>
              <H4>I can create </H4>
              <Skills />
            </YStack>
            <YStack jc="center" ai="center" pb={100}></YStack>
          </YStack>
        </YStack>

        <Separator></Separator>

        <YStack w="100%" minHeight={300} bg="white">
          <YStack
            maxWidth={1200}
            w="100%"
            mx="auto"
            py={100}
            p="$4"
            mb={100}
          >
            <H1 mb={50}>Some of my projects</H1>
            <Anchor
              href="https://www.canva.com/design/DAFw9y_t9FE/2iLOPcyAJs_lsOLUBMp06g/view?utm_content=DAFw9y_t9FE&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
            >
              My CV
            </Anchor>
            <Anchor href="https://goingoffroad.vercel.app/" target="_blank">
              My blog website
            </Anchor>
            <Anchor href="https://www.npmjs.com/package/chainedcss" target="_blank">
              Jss tailwind mix
            </Anchor>
            <Anchor href="https://elaborate-please.site/" target="_blank">
              ChatGPT powered book
            </Anchor>
            <Anchor href="https://symbiote-project.web.app/" target="_blank">
              Note taking app with login
            </Anchor>
            
            <Paragraph>AI book summary app [will upload feb 9th]</Paragraph>
          </YStack>
          <YStack maxWidth={1200} w="100%" mx="auto" p="$4" borderTopWidth={2}
            borderColor="$blue1Dark">
            <YStack maxWidth={800}>
              <H1 mb={50}>Things I've used or created</H1>
              <H3>Responsive Sites</H3>
              <Paragraph mb={25}>
                This site is responsive, check it out on {media.sm ? 'desktop' : ' mobile'}
              </Paragraph>
              <H3>Clean Code</H3>
              <Paragraph mb={25}>
                Employ code writing practices that make the functions, constants and project
                structure readable and understandable to anyone.
              </Paragraph>
              <H3>CI/CD</H3>
              <Paragraph mb={25}>
                Integrate automatic deployment to the web immediately after pushing your branch.
                Integrate app development to the Google Play Console via Azure.
              </Paragraph>
              <H3>Typescript | ESlint</H3>
              <Paragraph mb={25}>
                Typescript and ESLint for intelisense coding and error catching before production
              </Paragraph>
              <H3>SASS, Tailwind, PostCSS</H3>
              <Paragraph mb={25}>Use modern styling frameworks</Paragraph>
              <H3 mb={25}>Created Forms</H3>
              <H3 mb={25}>Created image carousels</H3>
              <H3 mb={25}>Improved perfomance of Image rendering in an app</H3>
            </YStack>
            <YStack ai="center">
              <Theme name="dark">
                <SheetDemo />
              </Theme>
            </YStack>
          </YStack>

          <YStack
            maxWidth={1600}
            w="100%"
            mx="auto"
            py={100}
            p="$4"
            borderTopWidth={2}
            borderColor="$blue1Dark"
          >
            <H1>Adomas Gaudiesius</H1>
            <Anchor href="https://www.linkedin.com/in/adomas-g-0738b487/" target="_blank">
              <H1>Linkedin</H1>
            </Anchor>
            <Anchor href="https://twitter.com/adomas_offtrack" target="_blank">
              <H1>Twitter</H1>
            </Anchor>
            <Anchor href="https://medium.com/@goingoffroad" target="_blank">
              <H1>Medium</H1>
            </Anchor>
            <Anchor href="https://github.com/adomasgaudi" target="_blank">
              <H1>Github</H1>
            </Anchor>
            <H1>adomas.gaudi.23@gmail.com</H1>
            <H1>+370 61609911</H1>
          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
