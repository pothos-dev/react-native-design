import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { BorderRadius, Theme } from '../types'
import { useTheme } from '../useTheme'

export interface BoxProps {
  bg?: string
  flex?: number | boolean
  borderRadius?: BorderRadius
  outline?: string

  style?: ViewStyle
  children?: ReactNode[]
}

export function Box(props: BoxProps) {
  const theme = useTheme()
  const boxStyle = boxPropsToStyle(props, theme)
  return <View style={boxStyle}>{props.children}</View>
}

export function boxPropsToStyle(
  props: BoxProps,
  theme: Theme
): StyleProp<ViewStyle> {
  let flex = props.flex
  if (typeof flex == 'boolean') {
    flex = flex ? 1 : undefined
  }

  const backgroundColor = props.bg
  const borderRadius = theme.borderRadius[props.borderRadius ?? 'default']
  const borderWidth = props.outline ? theme.outlineWidth : 0
  const borderColor = props.outline

  return [
    props.style,
    {
      flex,
      backgroundColor,
      borderRadius,
      borderWidth,
      borderColor,
    },
  ]
}
