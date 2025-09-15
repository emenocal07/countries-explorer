import React from 'react'
import { Text, TextProps } from 'react-native'
import { styles } from './StyledTitle.styles'

interface TitleMacondoProps extends TextProps {
  children: React.ReactNode;
}

const StyledTitle: React.FC<TitleMacondoProps> = ({ style, children, ...props }) => {
  return (
    <Text
      {...props}
      style={[styles.title, style]}
    >
      {children}
    </Text>
  );
};

export default StyledTitle;
