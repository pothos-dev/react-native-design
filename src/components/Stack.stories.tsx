import React from 'react'
import { Box } from './Box'
import { FullScreen } from './FullScreen'
import { Stack } from './Stack'

export default { title: 'Stack' }

export function DefaultStack() {
  return (
    <FullScreen>
      <Stack flex>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>
    </FullScreen>
  )
}

function Placeholder() {
  return <Box bg="red" flex style={{ minHeight: 80 }} />
}
