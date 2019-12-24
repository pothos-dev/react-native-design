import React from 'react'
import { Button } from './Button'
import { FullScreen } from './FullScreen'
import { Stack } from './Stack'

export default { title: 'Stack' }

export function DefaultStack() {
  return (
    <FullScreen>
      <Stack horizontal>
        <Button title="filled" mode={'important'} variant={'outline'} />
        <Button title="outlined" variant={'outline'} />
      </Stack>
    </FullScreen>
  )
}
