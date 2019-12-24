import React from 'react'
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useTheme } from '..'
import { Spacing } from '../types'
import { BoxProps, boxPropsToStyle } from './Box'

export interface ButtonProps extends BoxProps {
  title: string
  onPress?: () => void
  padding?: Spacing
}

export function Button(props: ButtonProps) {
  const { title, padding = 'default' } = props

  const theme = useTheme()
  const boxStyle = boxPropsToStyle(props, theme)

  const buttonStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing[padding],
  }

  const textStyle: TextStyle = {
    color: theme.palette.text,
  }

  return (
    <TouchableOpacity style={[boxStyle, buttonStyle]}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}
