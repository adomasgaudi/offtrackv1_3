import { H1 as TamaguiH1, Paragraph, styled, useMedia } from '@my/ui'

export const P = styled(Paragraph, {
  name: 'PsemiBold',
  fontWeight: 600,
  fontSize: 14,
  color: '$colorl2',
})
// export const H1 = styled(TamaguiH1, {
//   name: 'MyH1',
//   fontWeight: 800,
//   color: '$accentl1',
// })

const H1AnimationProps = {
  enterStyle: { x: -30, opacity: 0 },
  animation: 'medium',
}

export const H1Base = ({ children, ...props }) => {
  const mobile = useMedia().xs
  return (
    <TamaguiH1
      {...props}
      size={mobile ? '$9' : '$11'}
      {...H1AnimationProps}
      fontFamily="$inter"
    >
      {children}
    </TamaguiH1>
  )
}
export const H1Color = ({ children, ...props }) => {
  const mobile = useMedia().xs
  return (
    <TamaguiH1 {...props} color="$accentl1" size={mobile ? '$9' : '$11'} {...H1AnimationProps}>
      {children}
    </TamaguiH1>
  )
}

export const H1 = {
  Base: H1Base,
  Color: H1Color,
}
