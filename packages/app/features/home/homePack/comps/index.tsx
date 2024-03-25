import { Button, H1, View, YStack, styled } from "@my/ui";

export const Container = styled(View, {
    name: 'Container',
    maxWidth: 1000,
    w: '100%',
    m: 'auto',
    flexDirection: 'column',
  
    variants: {
      border: {
        true: {
          borderColor: 'blue',
          borderWidth: 1,
        },
      },
      X: {
        true: {
          flexDirection: 'row',
        },
      },
      Y: {
        true: {
          flexDirection: 'column',
        },
      },
    } as const,
  })

export const ContainerXS = styled(Container, {
  name: 'ContainerXS',
  maxWidth: 500,
  w: '100%',
  m: 'auto',
  flexDirection: 'column',

  variants: {
    border: {
      true: {
        borderColor: 'blue',
        borderWidth: 1,
      },
    },
    X: {
      true: {
        flexDirection: 'row',
      },
    },
    Y: {
      true: {
        flexDirection: 'column',
      },
    },
  } as const,
})
  
export const Hero = styled(H1, {
  name: 'Hero',
  size: "$14", 
  color: "$color33",

  variants: {
    border: {
      true: {
        borderColor: 'blue',
        borderWidth: 1,
      },
    },
    rakkas: {
      true: {
        fontFamily: '$rakkas',
        fontSize: 80,
      },
    }
  } as const,
})

export const heroShadowP = (isDark) => ({
  textShadowColor: isDark ? "$accent" : "none",
  textShadowRadius: 10
})

export const ButtonNav = styled(Button, {
  name: 'Hero',
  size: "$2",
  bg: "inherit",
  focusStyle: { outlineWidth: 0 },
  outlineWidth: 0,
  

  variants: {
    border: {
      true: {
        borderColor: 'blue',
        borderWidth: 1,
      },
    },
  } as const,
})


export const Cont = ({ children, mobile, ...props }) => {
  return (
    <>
      {mobile ?
        <ContainerXS px={20} {...props}>{children}</ContainerXS>
        : <Container {...props}>{children}</Container>
      }
    </>
  )
}

export const Card = styled(YStack, {
  name: 'Card',
  borderRadius: "100%",
  borderColor: "$accent",
  borderWidth: 1,
  shadow: 1,
  minHeight: 400,
  jc: 'center',
  ai: 'center',
  f: 1,
  variants: {
    border: {
      true: {
        borderColor: 'blue',
        borderWidth: 1,
      },
    },
  } as const,
})