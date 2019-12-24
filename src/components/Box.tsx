import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

export interface BoxProps {
  bg?: string
  flex?: number | boolean
  style?: ViewStyle
  children?: ReactNode[]
}

export function Box(props: BoxProps) {
  return <View style={boxPropsToStyle(props)}>{props.children}</View>
}

export function boxPropsToStyle(props: BoxProps): StyleProp<ViewStyle> {
  let flex = props.flex
  if (typeof flex == 'boolean') {
    flex = flex ? 1 : undefined
  }

  let backgroundColor = props.bg

  return [
    props.style,
    {
      flex,
      backgroundColor,
    },
  ]
}
