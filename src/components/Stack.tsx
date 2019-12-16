import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import { Spacing } from '../types'
import { useTheme } from '../useTheme'

export interface StackProps {
  horizontal?: boolean
  center?: boolean
  spacing?: Spacing

  style?: ViewStyle
  children: ReactNode[]
}

export function Stack({
  horizontal,
  center,
  spacing = 'default',
  style,
  children,
}: StackProps) {
  const theme = useTheme()

  let viewStyle: ViewStyle = {}

  if (horizontal) {
    viewStyle.flexDirection = 'row'
  }

  if (center) {
    viewStyle.alignItems = 'center'
  }

  const margin = theme.spacing[spacing]
  const childStyle: ViewStyle = {}
  if (horizontal) {
    childStyle.marginLeft = margin
    childStyle.marginRight = margin
  } else {
    childStyle.marginTop = margin
    childStyle.marginBottom = margin
  }

  children = children.map((child, index) => (
    <View key={index} style={childStyle}>
      {child}
    </View>
  ))

  return <View style={[viewStyle, style]}>{children}</View>
}
