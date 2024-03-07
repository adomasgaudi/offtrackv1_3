import { Button, H1, XStack } from '@my/ui'
import { Rainbow, SunMoon } from '@tamagui/lucide-icons'
import { ButtonNav, Container, Hero, heroShadowP } from '../comps'




export const SectionNav = ({ handleColorChange, handleThemeChange }) => {
  return (
    <Container X py={5} px={20}>
      <ButtonNav icon={SunMoon} onPress={handleThemeChange} />
      <ButtonNav icon={Rainbow} onPress={handleColorChange} />
    </Container>
  )
}
export const SectionTop = ({ isDark }) => {
  return (

    <Container Y px={20}>
      <Hero {...heroShadowP(isDark)}>
        Full-Stack Developer
      </Hero>
    </Container>
  )
}