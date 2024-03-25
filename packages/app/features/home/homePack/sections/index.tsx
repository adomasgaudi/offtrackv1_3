import { Button, H1, H3, XStack, useMedia, Text, YStack, H2, View, Anchor, Paragraph, Image } from '@my/ui'
import { Rainbow, SunMoon } from '@tamagui/lucide-icons'
import { ButtonNav, Card, Cont, Container, ContainerXS, Hero, heroShadowP } from '../comps'
import { SVGCard, SVGWrapFull } from '../comps/Svgs'
import { useState } from 'react'
import images from '../../../../../images'




export const SectionNav = ({ handleColorChange, handleThemeChange }) => {
  return (
    <Container X py={5} px={20}>
      <ButtonNav icon={SunMoon} onPress={handleThemeChange} />
      <ButtonNav icon={Rainbow} onPress={handleColorChange} />
    </Container>
  )
}


const stylesx = {
  text: (hoverOn) => ({
    bg: hoverOn ? "blue" : "red",
    w: hoverOn ? 200 : 0,
    h: hoverOn ? 50 : 0,
    transition: "1s",
    // overflow: "hidden",
  }),
  hero: {
    color: "$color33",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "$primary",
    p: 20
  },
  cont: {
    f: 1,
    // bg: "red",
    py: 10,
    // hoverStyle: { f: 4, transition: "0.3s" },
  }
  // f: 1,
  // animation: "bouncy",
  // p: 20,
  // position: "relative"

}

const myBoxShadow1 = `   
0px 0px 1px hsla(0, 0%, 0%, 0.05), 
0px 0px 2px hsla(0, 0%, 0%, 0.05), 
0px 0px 4px hsla(0, 0%, 0%, 0.05), 
0px 0px 8px hsla(0, 0%, 0%, 0.05), 
0px 0px 16px hsla(0, 0%, 0%, 0.05)
`
export const SectionTop = ({ isDark, themeNum }) => {
  const [hoverOn, setHoverOn] = useState(false)
  const mobile = useMedia().md

  const handleHover = (e) => {
    console.log(e)
    setHoverOn(prev => !prev)
  }
  return (
    <>
      <Cont {...{ mobile }} pb={mobile ? 0 : 100} minHeight="100vh">
        <Hero mt={50} mb={mobile ? -40 : 50} letterSpacing={mobile && -1} fontSize={mobile ? "$10" : 140} w="100%" >
          <Text borderBottomWidth={3} borderBottomColor="$primary" pb={0}>
            Front-end
          </Text>
        </Hero>
        <Hero mb={50} fontSize={mobile ? "$12" : 140} w="100%" textAlign={mobile ? "left" : "right"} letterSpacing={mobile && -1} >
          <Text fontFamily="TimesNewRoman" color="$secondary" >
            Developer
          </Text>
        </Hero>
        <Image
          source={{
            uri: mobile ? images.mobileframe.src : images.webframe.src,
            width: '100%',
            height: mobile ? 400 : 650,
          }}
          resizeMode="cover"
          borderRadius={10}
          boxShadow={myBoxShadow1}
          mb={30}
        />
      </Cont>
      <Cont {...{ mobile }}>
        <Anchor href="https://goingofftrack.blog/" target="_blank" mt={100} mb={100}>
          <Hero my={50} size={mobile ? "$10" : "$14"}>
            <Text color="$color33">
              My Projects <Text color="$secondary">
                {">>"}
              </Text>
            </Text>
          </Hero>
        </Anchor>
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



// <View gap={50} flexDirection={mobile ? "column" : "row"}>
// <XStack maxWidth={400} width={400} p={10} m="auto">
//   <XStack {...stylesx.cont} jc="flex-start">
//     <H2 {...stylesx.hero}>Apps</H2>
//     {/* <YStack {...stylesx.text(hoverOn)}>React Native - Expo</YStack> */}
//   </XStack>
//   <XStack {...stylesx.cont} jc="flex-end">
//     <H2 {...stylesx.hero}>Web</H2>
//     {/* <YStack {...stylesx.text(hoverOn)}>React Native - Expo</YStack> */}
//   </XStack>
  
  
//   {/* <YStack {...stylesx}>
//     <XStack>
//       <H2 color="$color">Web</H2>
//       <YStack position="absolute">React.js - Next.js</YStack>
//     </XStack>
//   </YStack>
//   <YStack f={1} hoverStyle={{ f: 4, transition: "0.3s" }} animation="bouncy" borderWidth={1} borderRadius={20} borderColor="$primary" p={20} position="relative">
//     <XStack >

//       <YStack position="absolute">React.js - Next.js</YStack>
//       <H2 color="$color">Web</H2>
//     </XStack>
//   </YStack> */}
//   {/* <XStack f={1} hoverStyle={{ f: 4, transition: "0.3s" }} animation="bouncy" p={20}>
//     <YStack>React Native - Expo</YStack>
//     <H2 color="$color">Apps</H2>
//   </XStack> */}
// </XStack>
// {/* <Card>
//   <H2 color="$color">Websites</H2>
//   <YStack>React.js - Next.js</YStack>
//   <YStack></YStack>
// </Card>
// <Card>
//   <H2 color="$color">Apps</H2>
//   <YStack>React Native - Expo</YStack>
//   <YStack>Tamagui</YStack>
// </Card> */}
// </View>