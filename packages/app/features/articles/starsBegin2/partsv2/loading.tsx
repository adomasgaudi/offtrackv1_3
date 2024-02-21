import { Spinner, YStack, useMedia } from '@my/ui'
import { useEffect, useState } from 'react'

export const LoadingScreen = () => {
  return (
    <YStack jc="center" ai="center" w="100%" h="100vh">
      <Spinner size="large" color="$color.orange10Light" />
    </YStack>
  )
}

export const LoadingWrapper = ({ children }) => {
  const [isMobile, setIsMobile] = useState<any>(null)
  const mobile = useMedia().xs

  useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])

  if (isMobile === null) {
    return <LoadingScreen />
  }

  return children(isMobile)
}
