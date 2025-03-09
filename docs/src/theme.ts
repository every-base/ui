import type { Theme } from '@everybase/ui' 

const theme = {
  components: {
    Container: {
      base: 'container mx-auto',
    }
  }
} as const satisfies Theme

export default theme