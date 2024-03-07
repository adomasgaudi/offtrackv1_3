import { Button, H1, View, styled } from "@my/ui";

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

  
export const Hero = styled(H1, {
  name: 'Hero',
  my: 50, 
  size: "$14", 
  color: "$color33",

  variants: {
    border: {
      true: {
        borderColor: 'blue',
        borderWidth: 1,
      },
    },
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