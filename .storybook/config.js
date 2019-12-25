import { object } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters, configure } from '@storybook/react'
import React from 'react'
import { FullScreen } from '../src/components/FullScreen'
import { defaultTheme, ThemeProvider } from '../src/useTheme'

addParameters({
  options: {
    panelPosition: 'right',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
})

addDecorator((storyFn) => <FullScreen>{storyFn()}</FullScreen>)
addDecorator((storyFn) => {
  const theme = object('theme', defaultTheme)
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
})

configure(require.context('../src', true, /\.stories\.tsx$/), module)
