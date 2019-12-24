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

    outlineWidth: 1,

    borderRadius: {
      default: 5,
      none: 0,
      small: 2,
      medium: 5,
      large: 10,
    },

    palette: {
      background: 'white',
      text: 'black',
      accent: 'gold',

      mode: {
        important: 'blue',
        success: 'green',
        danger: 'red',
      },
    },
  }
}
