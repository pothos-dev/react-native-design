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
  bg?: string
  padding?: Spacing

  children: ReactNode
  style?: ViewStyle
}

export function FullScreen({
  bg,
  children,
  style,
  padding: paddingProp = 'default',
}: FullScreenProps) {
  const theme = useTheme()

  const padding = theme.spacing[paddingProp]
  const fullscreenStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: StatusBar.currentHeight ?? 0,
    bottom: 0,
    padding,
    backgroundColor: bg,
  }

  switch (Platform.OS) {
    case 'ios':
      return (
        <SafeAreaView style={[fullscreenStyle, style]}>{children}</SafeAreaView>
      )
    default:
      return <View style={[fullscreenStyle, style]}>{children}</View>
  }
}
