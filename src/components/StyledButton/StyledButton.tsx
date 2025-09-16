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
  const labelText = typeof children === 'string' ? children : undefined

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
        accessibilityLabel={labelText}
        accessibilityRole="button"
        style={[
          {
            alignSelf: 'center',
            minHeight: 44,
            justifyContent: 'center',
            paddingHorizontal: 24,
            width: 'auto',
            maxWidth: '90%',
          },
          style,
        ]}
        labelStyle={{ fontSize: 16 }}
      >
        {children}
      </Button>
    </View>
  )
}

export default StyledButton
