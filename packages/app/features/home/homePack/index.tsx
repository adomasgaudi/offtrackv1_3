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
  View,
} from '@my/ui'
import { Theme } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'
import img from '../../../../Images'
import { useWindowDimensions } from 'react-native'
import { P1 } from '../../article/exoplanetsin10'

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
          <View w="100%" bg="red" h="100%" p={10}>

          <View w="100%" bg="blue" h="100%">
          <H1>jhgjhgj</H1>

          <H1>jhgjhgj</H1>
          </View>
          </View>
          {/* <ContactInfo /> */}
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

const Boxy = ({ children, mobile }) => {
  return (
    <>
      {mobile ? (
        <View w={200} h={200} borderRadius={2} m="auto" p={10} bg="#eeeeee">
          {children}
        </View>
      ) : (
        <YStack
          w={200}
          h={200}
          borderRadius={2}
          bg="#eeeeee"
          position="absolute"
          bottom={-200}
          left={-10}
          p={10}
        >
          {children}
        </YStack>
      )}
    </>
  )
}

export function HomePack() {
  const media = useMedia()
  return (
    <Theme name="ebb">
      <YStack w="100%" h="100%" bc="$background">
        <YStack maxWidth={1200} w="100%" mx="auto" bc="" borderColor="$blue1Dark">
          <YStack f={1} mt="$10" jc="center" >
            <YStack minHeight={500}>
              <YStack flexWrap="wrap" w="100%" ai="flex-start" px={50}>
                <Paragraph fontWeight="bold" mb={50}>Built by Adomas Gaudiesius</Paragraph>
                <H1 mb={100} fontSize={media.sm ? 30 : undefined} letterSpacing={'normal'}>
                  Full-Stack Developer <br /> Content Creator
                </H1>
                <H4 alignSelf="flex-start">I create </H4>
                <View gap={100} jc="center" flexDirection={media.sm ? 'column' : 'row'}>
                  <YStack>
                    <H1>Apps</H1>
                    <PSkill>React Native</PSkill>
                    <PSkill>Expo</PSkill>
                    <PSkill>Swift</PSkill>
                  </YStack>
                  <YStack>
                    <H1>Websites</H1>
                    <PSkill>React</PSkill>
                    <PSkill>Vue</PSkill>
                    <PSkill>Next.js</PSkill>
                  </YStack>
                  <YStack>
                    <H1>Databases</H1>
                    <PSkill>MySQL</PSkill>
                    <PSkill>MongoDB</PSkill>
                    <PSkill>PostgreSQL</PSkill>
                  </YStack>
                </View>
              </YStack>
            </YStack>
            <YStack jc="center" ai="center" pb={100}></YStack>
          </YStack>
        </YStack>

        <Separator></Separator>

        <YStack w="100%" minHeight={300} bg="white">
          <YStack maxWidth={1200} w="100%" mx="auto" py={100} p="$4" mb={100}></YStack>
          <YStack maxWidth={800} w="100%" mx="auto" p="$4">
            <H1 mb={150}>Some of my projects</H1>
                    <Anchor href="https://goingofftrack.blog" target="_blank">
                      {/* <H2>My blog website</H2> */}
                      <YStack position="relative" mb={300}>
                        <Image
                          source={{
                            uri: img.goingofftrack.src,
                            width: '100%',
                            height: media.sm ? 200 : 400,
                          }}
                        />
                        <Boxy mobile={media.sm}>
                          {/* <H3>ChainedCSS</H3> */}
                          <H3>A blog website</H3>
                          <P1></P1>
                        </Boxy>
                      </YStack>
                    </Anchor>
            <Anchor href="https://www.npmjs.com/package/chainedcss" target="_blank">
              {/* <H2>Jss tailwind mix</H2> */}
              <YStack position="relative" mb={300}>
                <Image
                  source={{
                    uri: img.chainedcss.src,
                    width: '100%',
                    height: media.sm ? 100 : 200,
                  }}
                />
                <Boxy mobile={media.sm}>
                  <H3>ChainedCSS</H3>
                </Boxy>
              </YStack>
            </Anchor>
            <Anchor href="https://elaborate-please.site/" target="_blank">
              {/* <H2>ChatGPT powered book</H2> */}
              <YStack position="relative" mb={300}>
                <Image
                  source={{
                    uri: img.elaborate.src,
                    width: '100%',
                    height: media.sm ? 200 : 400,
                  }}
                />
                <Boxy mobile={media.sm}>
                  <H3>AI</H3>
                  <H3>A blog website</H3>
                  <P1></P1>
                </Boxy>
              </YStack>
            </Anchor>
            <Anchor href="https://symbiote-project.web.app/" target="_blank" mb={200}>
              {/* <H2>Note taking app with login</H2> */}
              <YStack position="relative" mb={300}>
                <Image
                  source={{
                    uri: img.symbiote.src,
                    width: '100%',
                    height: media.sm ? 125 : 250,
                  }}
                />
                <Boxy mobile={media.sm}>
                  <H3>Google signin </H3>
                  <H3>Different User info</H3>
                  <H3>Note taking</H3>
                </Boxy>
              </YStack>
            </Anchor>
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
            <H2 fontSize={media.sm ? "$9" : "$10"}>+370 61609911</H2>
            <H2 fontSize={media.sm ? "$8" : "$10"} letterSpacing={-1}>adomas.gaudi.23@gmail.com</H2>
          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
