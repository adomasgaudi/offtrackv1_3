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
  Image
} from '@my/ui'
import { Theme } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'
import img from "../../../Images"
import { useWindowDimensions } from 'react-native';


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
      <Button
        size="$6"
        circular
        onPress={() => setOpen((x) => !x)}
      >CV</Button>
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
  const windowDimensions = useWindowDimensions();

  return (
    <YStack>
      <H2>Curriculum Vitae</H2>
      <Image
        source={{ width: windowDimensions.width,  height: windowDimensions.height, uri: img.agcv.src }}
        width={windowDimensions.width}
        height={windowDimensions.height}
        my={100}
      />
      <Paragraph ta="center">
        adomas.gaudi.23@gmail.com
      </Paragraph>
      <Paragraph ta="center">
        +370 61609911
      </Paragraph>
    </YStack>
  )
}

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })
  const media = useMedia()

  return (
    <Theme name="ebb">
      <YStack w="100%" h="100%" bc="$background" >
        <YStack maxWidth={1200} w="100%" mx="auto" bc="" borderColor="$blue1Dark" >
          <Paragraph p="$4" fontWeight="bold" >
            Built by Adomas Gaudiesius
          </Paragraph>
          <YStack f={1} mt="$10" jc="center" p="$4" space >
            <YStack space="$4" minHeight={500} >
              <H1 
                mb={100} 
                fontSize={media.sm ? 30 : undefined} 
                letterSpacing={"normal"}
              >
                Full-Stack Developer <br/> Content Creator
              </H1>
              <H4>I can create  </H4>
              <Skills />
            </YStack>
            <YStack jc="center" ai="center" pb={100}>
            </YStack>
          </YStack>
        </YStack>

        <Separator></Separator>
        
        <YStack  w="100%" minHeight={300} bg="white" >
          <YStack maxWidth={1200}  
            w="100%" mx="auto" py={100}
            p="$4"
          >
            <YStack my={100} maxWidth={800}>
              <H3>This is Responsive Design</H3>
              <Paragraph mb={50}>Press Ctrl+Shift+C on Chrome and change the viewport width or togle between mobile and web to see how this website responds.</Paragraph>
              <H3>Clean Code</H3>
              <Paragraph mb={50}>Employ code practices that make your code readable to anyone.</Paragraph>
              <H3>CI/CD</H3>
              <Paragraph mb={50}>Integrate automatic deployment to the web immediately after pushing your branch.</Paragraph>
              <H3>Typescript / eslint</H3>
              <Paragraph mb={50}>Typescript and ESLint for intelisense coding and error catching before production</Paragraph>
              <H3>SASS, Tailwind, PostCSS</H3>
              <Paragraph mb={50}>Use modern styling frameworks</Paragraph>
            </YStack>
            <YStack ai="center">
              <Theme name="dark">
                <SheetDemo />
              </Theme>
            </YStack>

          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}