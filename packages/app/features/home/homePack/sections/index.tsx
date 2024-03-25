import { Anchor, Button, H1, H2, H4, Image, Paragraph, Sheet, View, YStack, styled, useMedia, useToastController } from '@my/ui'
import { ChevronDown } from '@tamagui/lucide-icons'
import { useState } from 'react'
import images from '../../../../../Images'


export const PSkill = styled(Paragraph, {
  name: 'ParSkill',
  fontWeight: 'bold',
  color: 'black',
  hoverStyle: {color: "blue", transition: ".3s"}
})

export const Skills = () => {
  return (
    <>
      <Skill title="Apps" skills="React-Native Expo" />
      <Skill title="Websites" skills="React Vue Next Nuxt PHP jQuery" />
      <Skill title="Databases" skills="PHP Laravel MySQL Supabase Firebase" />
    </>
  )
}

export const Skill = ({ title, skills }) => {
  return (
    <YStack>
      <H1>{title}</H1>
      <PSkill>{skills}</PSkill>
    </YStack>
  )
}

export const CVSheet = () => {
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
            }}
            mb={10}
            bg="#fdfdfd"
          ></Button>
          <View w={300} bg="red" h={500}></View>
          {/* <CuriculumVitae /> */}
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

export const CuriculumVitae = () => {
  const media = useMedia()
  return (
    <YStack w="100%" h={800} overflow="scroll" ai="center" py={200}>
      <Image
        source={{ width: media.xs ? '100%' : 600, height: media.xs ? 500 : 850, uri: images.cvBlack.src }}
        shadowRadius={2}
        shadowOffset={2}
        shadowColor="black"
        shadowOpacity={0.2}
      />
    </YStack>
  )
}

export const Boxy = ({ children, mobile, mt, ...props }) => {
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
          maxHeight={400}
          borderRadius={10}
          bg="#eeeeee"
          // position="absolute"
          // bottom={-200}
          // left={-10}
          p={10}
          x={0}
          hoverStyle={{ x: 20, bg: '#ff4b4b' }}
          animation="bouncy"
        >
          {children}
        </YStack>
      )}
    </>
  )
}

export const Project = ({ href, imgSrc, imgWidth, title, descriptions, media }) => (
  <Anchor href={href} target="_blank">
    <YStack position="relative" mb={50}>
      <Image
        source={{
          uri: imgSrc,
          width: '100%',
          height: media.sm ? imgWidth : imgWidth * 2,
        }}
      />
      <Boxy mobile={media.sm} mt={10} mb={100}>
        <H2 size="$10">{title}</H2>
        {descriptions.map((desc, index) => (
          <H4 size="$6" key={index}>
            {desc}
          </H4>
        ))}
      </Boxy>
    </YStack>
  </Anchor>
)
