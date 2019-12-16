import { Theme } from './types'

export function useTheme(): Theme {
  return {
    spacing: {
      default: 10,

      none: 0,
      small: 5,
      medium: 10,
      large: 20,
    },
  }
}
