import React, { createContext, ReactNode, useContext } from 'react'
import { Theme } from './types'

export const defaultTheme: Theme = {
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

const themeContext = createContext({ theme: defaultTheme })

export function useTheme(): Theme {
  return useContext(themeContext).theme
}

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme
  children: ReactNode
}) {
  return (
    <themeContext.Provider value={{ theme }}>{children}</themeContext.Provider>
  )
}
