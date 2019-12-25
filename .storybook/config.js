import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters, configure } from '@storybook/react'
import React from 'react'
import { FullScreen } from '../src/components/FullScreen'
addDecorator((storyFn) => <FullScreen>{storyFn()}</FullScreen>)

addParameters({
  options: {
    panelPosition: 'right',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
})

configure(require.context('../src', true, /\.stories\.tsx$/), module)
