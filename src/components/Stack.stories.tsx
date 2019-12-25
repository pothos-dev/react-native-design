import { boolean, radios, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { Spacing } from '../types'
import { Box } from './Box'
import { Stack } from './Stack'

export default {
  title: 'Stack',
  decorators: [withKnobs],
}

export function Default() {
  const horizontal = boolean('horizontal', false)
  const flex = boolean('flex', false)
  const outline = boolean('outline', false) ? 'black' : undefined

  const spacing = radios<Spacing>(
    'spacing',
    {
      default: 'default',
      none: 'none',
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'default'
  )

  return (
    <Stack {...{ horizontal, flex, spacing, outline }}>
      <Box flex style={{ minHeight: 80, minWidth: 80 }} bg="red" />
      <Box flex style={{ minHeight: 80, minWidth: 80 }} bg="green" />
      <Box flex style={{ minHeight: 80, minWidth: 80 }} bg="blue" />
    </Stack>
  )
}
