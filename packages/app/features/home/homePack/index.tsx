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
  Text,
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

function CVSheet() {
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
        <Sheet.Frame
          ai="center"
          jc="center"
          shadowRadius={2}
          shadowOffset={2}
          shadowColor="black"
          shadowOpacity={0.3}
          bg="#fdfdfd"
        >
          <Sheet.Handle />
          <Button
            size="$2"
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              // toast.show('Warning!', {
              //   message: 'I sometimes forget to read emails',
              // })
            }}
            mb={10}
            bg="#fdfdfd"
          />

          <CuriculumVitae />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

function CuriculumVitae() {
  const media = useMedia()
  return (
    <YStack w="100%" h={500} ai="center">
      <Image
        source={{ width: media.xs ? '100%' : 600, height: media.xs ? 500 : 800, uri: img.agcv.src }}
        shadowRadius={2}
        shadowOffset={2}
        shadowColor="black"
        shadowOpacity={0.2}
      />
    </YStack>
  )
}

const Boxy = ({ children, mobile, mt, ...props }) => {
  return (
    <>
      {mobile ? (
        <View w={200} h={200} borderRadius={2} m="auto" p={10} bg="#eeeeee">
          {children}
        </View>
      ) : (
        <YStack
          maxW={400}
          {...props}
          mt={mt}
          maxH={400}
          borderRadius={10}
          bg="#eeeeee"
          position="absolute"
          bottom={-200}
          left={-10}
          p={10}

          x={0}
          hoverStyle={{ x: 20, bg: "#ff4b4b" }}
          animation="bouncy"
        >
          {children}
        </YStack>
      )}
    </>
  )
}

const Project = ({ href, imgSrc, imgWidth, title, descriptions, media }) => (
  <Anchor href={href} target="_blank">
    <YStack position="relative" mb={250} >
      <Image
        source={{
          uri: imgSrc,
          width: '100%',
          height: media.sm ? imgWidth : imgWidth * 2,
        }}
      />
      <Boxy mobile={media.sm} mt={-100}>
        <H2 size="$10">{title}</H2>
        {descriptions.map((desc, index) => (
          <H4 size="$6" key={index}>{desc}</H4>
        ))}
      </Boxy>
    </YStack>
  </Anchor>
)

const PROJECTS = [
  {
    href: "https://goingofftrack.blog",
    imgSrc: img.goingofftrack.src,
    imgWidth: 200,
    title: "A blog website",
    descriptions: ['ChatGPT summaries', 'Responsive layout']
  },
  {
    href: "https://www.npmjs.com/package/chainedcss",
    imgSrc: img.chainedcss.src,
    imgWidth: 150,
    title: "CSS-in-JS",
    descriptions: ['Tailwind Style', 'NPM Package']
  },
  {
    href: "https://elaborate-please.site/",
    imgSrc: img.elaborate.src,
    imgWidth: 200,
    title: "AI Powered reading",
    descriptions: ['Language learning']
  },
  {
    href: "https://symbiote-project.web.app/",
    imgSrc: img.symbiote.src,
    imgWidth: 130,
    title: "Note app",
    descriptions: ["Google sign-in", "Firebase user data", "CRUD editable notes"]
  },
  {
    href: "https://the-traveler-9b680.web.app",
    imgSrc: img.theTraveler.src,
    imgWidth: 600,
    title: "Some buggy game I made a while ago",
    descriptions: ["Healing, improving algorithm", "responsive"]
  },
  {
    href: "https://submersion-9.web.app",
    imgSrc: img.submersioncards.src,
    imgWidth: 200,
    title: "My old vue language blog",
    descriptions: ["Vue.js", "sass, pug", ""]
  }
];

export function HomePack() {
  const media = useMedia()
  return (
    <Theme name="dark">
      <YStack w="100%" h="100%" bc="$background">
        <YStack maxWidth={1600} w="100%" mx="auto" borderColor="$blue1Dark">
          <YStack f={1} mt="$10" jc="center">
            <YStack minHeight={500}>
              <YStack flexWrap="wrap" w="100%" ai="flex-start" px={20}>
                <Paragraph fontWeight="bold" mb={50}>
                  Built by Adomas Gaudiesius
                </Paragraph>
                <H1 mb={100} size={media.sm ? "$9" : "$15"} letterSpacing={'normal'} w="content-fit" textAlign="justify">
                  Full-Stack Developer <br /> Content Creator
                  {/* <H4 alignSelf="flex-start">I create </H4> */}
                  <View gap={100} jc="space-between" w="100%" flexDirection={media.sm ? 'column' : 'row'} >
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
                </H1>
              </YStack>
            </YStack>
            <YStack jc="center" ai="center" pb={100}></YStack>
          </YStack>
        </YStack>

        <Separator></Separator>
        <Theme name="carnation">

          <YStack w="100%" minHeight={300} bg="$background">
            <YStack maxWidth={1600} w="100%" mx="auto" py={100} px={20} mb={100}>

              <H1 maxWidth={1600} mb={150} size={media.sm ? "$9" : "$14"} textAlign="left">
                Some of my projects</H1>
            </YStack>
            <YStack maxWidth={1200} w="100%" mx="auto" p="$4">
              {PROJECTS.map((project, index) => (
                <Project
                  key={index}
                  href={project.href}
                  imgSrc={project.imgSrc}
                  imgWidth={project.imgWidth}
                  title={project.title}
                  descriptions={project.descriptions}
                  media={media}
                />
              ))}
              <YStack ai="center">
                <Theme name="light">
                  <CVSheet />
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
              <H2 fontSize={media.sm ? '$9' : '$10'}>+370 61609911</H2>
              <H2 fontSize={media.sm ? '$8' : '$10'} letterSpacing={-1}>
                adomas.gaudi.23@gmail.com
              </H2>
            </YStack>
          </YStack>
        </Theme>
      </YStack >
    </Theme >
  )
}
