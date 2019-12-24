import React from 'react'
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useTheme } from '..'
import { Mode, Spacing } from '../types'
import { BoxProps, boxPropsToStyle } from './Box'

export interface ButtonProps extends BoxProps {
  title: string
  onPress?: () => void
  padding?: Spacing

  mode?: Mode
  variant?: 'default' | 'outline' | 'clear'
}

export function Button(props: ButtonProps) {
  const theme = useTheme()
  const boxStyle = boxPropsToStyle(props, theme)

  const { title, padding = 'default', mode: mode, variant = 'default' } = props

  const buttonStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing[padding],
  }

  const textStyle: TextStyle = {
    color: theme.palette.text,
  }

  const color = mode ? theme.palette.mode[mode] : theme.palette.accent
  switch (variant) {
    case 'default': {
      buttonStyle.backgroundColor = color
      break
    }
    case 'outline': {
      buttonStyle.borderColor = color
      buttonStyle.borderWidth = theme.outlineWidth
      break
    }
    case 'clear': {
      break
    }
  }

  return (
    <TouchableOpacity style={[boxStyle, buttonStyle]}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}
