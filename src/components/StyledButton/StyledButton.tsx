import React from 'react'
import { Text, View } from 'react-native'
import { Button, ButtonProps } from 'react-native-paper'
import { styles } from './StyledButton.styles'

interface StyledButtonProps extends ButtonProps {
  minWidth?: number
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  minWidth = 120,
  style,
  ...props
}) => {
  const [textWidth, setTextWidth] = React.useState<number | null>(null)

  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.measureText}
        onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
        numberOfLines={1}
      >
        {children}
      </Text>
      <Button
        {...props}
        style={[
          {
            width: textWidth ? Math.max(textWidth + 32, minWidth) : minWidth,
            alignSelf: 'center',
          },
          style,
        ]}
      >
        {children}
      </Button>
    </View>
  )
}

export default StyledButton
