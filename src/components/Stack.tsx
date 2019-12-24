import React from 'react'
import { View, ViewStyle } from 'react-native'
import { BoxProps, Spacing } from '../types'
import { useTheme } from '../useTheme'

export interface StackProps extends BoxProps {
  horizontal?: boolean

  // Align items centered along the main axis
  center?: boolean

  // Spacing between items
  spacing?: Spacing
}

export function Stack({
  horizontal,
  center,
  spacing = 'default',
  bg,
  flex,
  style,
  children,
}: StackProps) {
  const theme = useTheme()

  if (typeof flex == 'boolean') {
    flex = flex ? 1 : undefined
  }

  let viewStyle: ViewStyle = {
    display: 'flex',
    flex,
    backgroundColor: bg,
    alignItems: center ? 'center' : 'stretch',
    flexDirection: horizontal ? 'row' : 'column',
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
