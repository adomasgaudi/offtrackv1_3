import { Button, H1, H3, XStack, useMedia, Text, YStack, H2, View, Anchor, Paragraph } from '@my/ui'
import { Rainbow, SunMoon } from '@tamagui/lucide-icons'
import { ButtonNav, Card, Cont, Container, ContainerXS, Hero, heroShadowP } from '../comps'
import { SVGCard, SVGWrapFull } from '../comps/Svgs'




export const SectionNav = ({ handleColorChange, handleThemeChange }) => {
  return (
    <Container X py={5} px={20}>
      <ButtonNav icon={SunMoon} onPress={handleThemeChange} />
      <ButtonNav icon={Rainbow} onPress={handleColorChange} />
    </Container>
  )
}
export const SectionTop = ({ isDark, themeNum }) => {

  const mobile = useMedia().md
  return (
    <>
      <Cont {...{ mobile }} pb={100}>
        <Hero my={50} size={mobile ? "$9" : "$14"} textAlign="center">
          <Text color="$primary">
            Front-end&nbsp;
          </Text>
          Developer
        </Hero>

        {/*  */}
        
        <View gap={50} flexDirection={mobile ? "column" : "row"}>
          <Card>
            <H2 color="$color">Websites</H2>
            <YStack>React.js - Next.js</YStack>
            <YStack></YStack>
          </Card>
          <Card>
            <H2 color="$color">Apps</H2>
            <YStack>React Native - Expo</YStack>
            <YStack>Tamagui</YStack>
          </Card>
        </View>

        {/*  */}
      </Cont>
      <View borderTopWidth={1}>
        <Cont  {...{ mobile }}>
          <YStack maxWidth={1100} w="100%" mx="auto" py={100}  >
            <YStack px={5}>

              <H1 color="$primary" mb={30}>Adomas Gaudiesius</H1>
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
            </YStack>
            <YStack borderRadius={10} bg="$accent" p={5} py={10} mt={30}>
              <Paragraph
                fontSize={mobile ? 20 : 30}
                letterSpacing={-1}
                fontWeight={800}
                mb={mobile ? 0 : 5}
              >+370 61609911</Paragraph>
              <Paragraph
                letterSpacing={-1}
                fontSize={mobile ? 20 : 30}
                fontWeight={800}
              >adomas.gaudi.23@gmail.com</Paragraph>
            </YStack>
          </YStack>

        </Cont>
      </View>
    </>

  )
}