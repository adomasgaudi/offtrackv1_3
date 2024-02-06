import { Paragraph, Theme, YStack, styled } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { useRef, useState } from 'react'
import { XStack } from 'tamagui'

export const P1 = styled(Paragraph, {
  name: 'P1',
  fontWeight: 'normal',
  fontSize: 16,
  color: '#555',
})

export const Layout1 = ({ children }) => {
  return (
    <Theme name="light2">
      <YStack bg="$background" f={1}>
        <YStack jc="center" ai="center" maxWidth={800} mx="auto" bg="$background">
          <YStack>{children}</YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}

const myBoxShadow1 = `   0px 1px 1px hsla(0, 0%, 0%, 0.075), 
0px 2px 2px hsla(0, 0%, 0%, 0.075), 
0px 4px 4px hsla(0, 0%, 0%, 0.075), 
0px 8px 8px hsla(0, 0%, 0%, 0.075), 
0px 16px 16px hsla(0, 0%, 0%, 0.075)`

export function ArticleBox(props) {
  const [gradientDirection, setGradientDirection] = useState([1, 1])
  const [shadowDirection, setShadowDirection] = useState('0px 0px 0px')
  const boxRef = useRef(null)

  const handleMouseMove = (event) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2 //x position within the element.
      const y = event.clientY - rect.top - rect.height / 2 //y position within the element.
      const directionX = x / rect.width
      const directionY = y / rect.height
      setGradientDirection([directionX, directionY])
      setShadowDirection(`${directionX * 10}px ${directionY * 10}px 0px`)
    }
  }

  const handleMouseOut = () => {
    setGradientDirection([1, 1])
    setShadowDirection('0px 0px 0px')
  }

  return (
    <LinearGradient
      ref={boxRef}
      animation={props.animation || 'bouncy'}
      animateOnly={['transform']}
      backgroundColor="#fff"
      borderRadius="$9"
      boxShadow={myBoxShadow1}
      hoverStyle={{
        boxShadow: myBoxShadow1 + `, ${shadowDirection} hsl(162, 72%, 43%)`,
      }}
      pressStyle={{ scale: 1.015 }}
      cursor="pointer"
      p={20}
      {...props}
      colors={['#fff', '#f8fffb']}
      start={gradientDirection}
      end={[0, 0]}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      {props.children}
    </LinearGradient>
  )
}

export function ArticleBoxSM(props) {
  const [gradientDirection, setGradientDirection] = useState([1, 1])
  const [shadowDirection, setShadowDirection] = useState('0px 0px 0px')

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2 //x position within the element.
    const y = event.clientY - rect.top - rect.height / 2 //y position within the element.
    const directionX = x / rect.width
    const directionY = y / rect.height
    setGradientDirection([directionX, directionY])
    setShadowDirection(`${directionX * 10}px ${directionY * 10}px 0px`)
  }

  const handleMouseOut = () => {
    setGradientDirection([1, 1])
    setShadowDirection('0px 0px 0px')
  }

  return (
    <LinearGradient
      animation={props.animation || 'bouncy'}
      animateOnly={['transform']}
      backgroundColor="#fff"
      borderRadius="$9"
      boxShadow={myBoxShadow1}
      pressStyle={{ scale: 1.008 }}
      cursor="pointer"
      p={20}
      {...props}
      colors={['#fff', '#f8fffb']}
      start={gradientDirection}
      end={[0, 0]}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      {props.children}
    </LinearGradient>
  )
}
