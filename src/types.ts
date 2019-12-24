import { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export type Spacing = 'default' | 'none' | 'small' | 'medium' | 'large'

export interface BoxProps {
  bg?: string
  flex?: number | boolean
  style?: ViewStyle
  children: ReactNode[]
}

export type Theme = {
  spacing: Record<Spacing, number>
}
