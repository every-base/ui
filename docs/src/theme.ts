import type { Theme } from '@everybase/ui' 

const theme = {
  components: {
    Container: {
      base: 'container mx-auto',
    }
  }
} as const satisfies Theme

declare module '@everybase/ui' {
  interface Types {
    theme: typeof theme
  }
}

export default theme