import React, { ReactNode } from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  ViewStyle,
} from 'react-native'
import { Spacing } from '../types'
import { useTheme } from '../useTheme'

export interface FullScreenProps {
  borderSpacing?: Spacing

  children: ReactNode
  style?: ViewStyle
}

export function FullScreen({
  children,
  style,
  borderSpacing = 'default',
}: FullScreenProps) {
  const theme = useTheme()

  const padding = theme.spacing[borderSpacing]
  const viewStyle: ViewStyle = {
    flex: 1,
    padding,
    paddingTop: padding + (StatusBar.currentHeight ?? 0),
  }

  switch (Platform.OS) {
    case 'ios':
      return <SafeAreaView style={[viewStyle, style]}>{children}</SafeAreaView>
    default:
      return <View style={[viewStyle, style]}>{children}</View>
  }
}
