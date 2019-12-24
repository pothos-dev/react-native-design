import React from 'react'
import { Button } from './Button'
import { FullScreen } from './FullScreen'
import { Stack } from './Stack'

export default { title: 'Stack' }

export function DefaultStack() {
  return (
    <FullScreen>
      <Stack flex>
        <Button title="filled" bg="red" />
        <Button title="outlined" outline="red" />
      </Stack>
    </FullScreen>
  )
}
