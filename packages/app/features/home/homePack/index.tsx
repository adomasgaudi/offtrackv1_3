import { Anchor, H1, H2, Paragraph, Separator, useMedia, YStack, View, Text, XStack } from '@my/ui'
import { Theme } from 'tamagui'
import { GrainyFractalNoise, GrayBlur } from './svgs'
import { CVSheet, PSkill, Project } from './sections'
import { PROJECTS } from './constants'
import { P2 } from '../homePack/sections'
import { useState } from 'react'
import { P1 } from '../../article/exoplanetsin10'

const SkillSection = () => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* <YStack 
        height={isHovered ? 150 : 60} 
        overflow="hidden"
        hoverStyle={{ transition: '2s' }}
        transition="1s"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor="pointer"
      >
        <H1 mb={10}>Apps</H1>
        <P1>React Native</P1>
        <P1>Expo</P1>
        <P1>Tamagui</P1>
      </YStack> */}
      <YStack cursor="pointer">
        <H1 mb={20}>Apps</H1>
        <PSkill>React Native</PSkill>
        <PSkill>Expo</PSkill>
        <PSkill>Tamagui</PSkill>
      </YStack>
      <YStack cursor="pointer">
        <H1 mb={20}>Websites</H1>
        <PSkill>React</PSkill>
        <PSkill>Vue</PSkill>
        <PSkill>Next.js</PSkill>
        <PSkill>PHP</PSkill>
      </YStack>
      <YStack cursor="pointer">
        <H1 mb={20}>Databases</H1>
        <PSkill>PHP</PSkill>
        <PSkill>MySQL</PSkill>
        <PSkill>Laravel</PSkill>
        <PSkill>Firebase</PSkill>
      </YStack>
    </>
  );
}

const SectionBottomLinks = ({ mobile }) => (
  <YStack maxWidth={1100} w="100%" mx="auto" py={100} p="$4">
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
    <H2 fontSize={mobile ? '$9' : '$10'}>+370 61609911</H2>
    <H2 fontSize={mobile ? '$8' : '$10'} letterSpacing={-1}>
      adomas.gaudi.23@gmail.com
    </H2>
  </YStack>
)

const borderX = {
  borderLeftWidth: 1,
  borderLeftColor: '#efefef',
  borderRightWidth: 1,
  borderRightColor: '#efefef',
}
const borderT = {
  borderTopWidth: 1,
  borderTopColor: '#a3a3a3',
}
export function HomePack() {
  const media = useMedia()
  return (
    <>
      {media.sm ? (
        <YStack w="100%" h="100%" position="relative">
          <View position="absolute" w="100vw" h="100vh">
            <GrayBlur />
          </View>
          <View position="absolute" w="100vw" h="100vh">
            <GrainyFractalNoise />
          </View>

          <YStack maxWidth={1100} w="100%" mx="auto" borderColor="$blue1Dark">
            <YStack f={1} mt="$10" jc="center">
              <YStack minHeight={500}>
                <YStack flexWrap="wrap" w="100%" ai="flex-start" px={20}>
                  <Paragraph fontWeight="bold" mb={50}>
                    Built by Adomas Gaudiesius
                  </Paragraph>
                  <H1
                    mb={100}
                    size={media.sm ? '$9' : '$15'}
                    letterSpacing={'normal'}
                    w="content-fit"
                    textAlign="justify"
                  >
                    <Text fontFamily="TimesNewRoman">Full-Stack Developer</Text> <br /> Content
                    Creator
                    <View
                      gap={100}
                      jc="space-between"
                      w="100%"
                      flexDirection={media.sm ? 'column' : 'row'}
                    >
                      <SkillSection />
                    </View>
                  </H1>
                </YStack>
              </YStack>
              <YStack jc="center" ai="center" pb={100}>
                <H1>Mobile version will be soon updated</H1>
              </YStack>
            </YStack>
          </YStack>
        </YStack>
      ) : (
        <Theme name="dark">
          <YStack w="100%" h="100%" position="relative">
            <View position="absolute" w="100vw" h="100vh">
              <GrayBlur />
            </View>
            <View position="absolute" w="100vw" h="100vh">
              <GrainyFractalNoise />
            </View>

            <YStack maxWidth={1100} w="100%" mx="auto" borderColor="$blue1Dark">
              <YStack f={1} mt="$10" jc="center">
                <YStack minHeight={500}>
                  <YStack flexWrap="wrap" w="100%" ai="flex-start" px={20}>
                    <Paragraph fontWeight="bold" mb={50}>
                      Built by Adomas Gaudiesius
                    </Paragraph>
                    <H1
                      mb={100}
                      size={media.sm ? '$9' : '$15'}
                      letterSpacing={'normal'}
                      w="content-fit"
                      textAlign="justify"
                    >
                      <Text fontFamily="TimesNewRoman">Full-Stack Developer</Text> <br /> Content
                      Creator
                      <View
                        gap={100}
                        jc="space-between"
                        w="100%"
                        flexDirection={media.sm ? 'column' : 'row'}
                        mt={20}
                      >
                        <SkillSection />
                      </View>
                    </H1>
                  </YStack>
                </YStack>
                <YStack jc="center" ai="center" pb={100}></YStack>
              </YStack>
            </YStack>
          </YStack>
          <Separator></Separator>
          <Theme name="light">
            <YStack w="100%" minHeight={300} bg="$background">
              <YStack maxWidth={1100} w="100%" mx="auto" py={100} px={20} mb={100} {...borderX}>
                <H1 maxWidth={1100} mb={150} size={media.sm ? '$9' : '$14'} textAlign="left">
                  Some of my projects
                </H1>
              </YStack>
              <YStack maxWidth={1100} w="100%" mx="auto" p="$4" {...borderX}>
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
                    {/* <CVSheet /> */}
                  </Theme>
                </YStack>
              </YStack>
            </YStack>
            <XStack w="100%" {...borderT}>
              <SectionBottomLinks mobile={media.xs} />
            </XStack>
          </Theme>
        </Theme>
      )}
    </>
  )
}
