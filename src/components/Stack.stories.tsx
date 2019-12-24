import React from 'react'
import { Button } from './Button'
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
  return <Button title="Button" bg="red" />
}
