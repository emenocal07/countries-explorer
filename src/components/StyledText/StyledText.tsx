import React from 'react'
import { Text, TextProps } from 'react-native'
import { styles } from './StyledText.styles'

export const StyledText: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  )
}

export default StyledText
