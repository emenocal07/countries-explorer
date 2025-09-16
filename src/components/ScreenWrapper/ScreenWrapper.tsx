import LanguageSelector from '@components/LanguageSelector/LanguageSelector'
import React from 'react'
import { View, ViewProps } from 'react-native'
import { styles } from './ScreenWrapper.styles'

export const ScreenWrapper: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View style={[styles.wrapper, style]} {...props}>
    <View style={{ position: 'absolute', top: 16, right: 20, zIndex: 10 }}>
      <LanguageSelector />
    </View>
    {children}
  </View>
)
