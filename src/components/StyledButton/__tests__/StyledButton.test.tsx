import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import StyledButton from '../StyledButton'

describe('StyledButton', () => {
  it('renders the button with correct text', () => {
    const { getAllByText } = render(<StyledButton>Click me</StyledButton>)
    expect(getAllByText('Click me')[1]).toBeTruthy()
  })

  it('calls onPress when pressed', () => {
    const onPress = jest.fn()
    const { getAllByText } = render(<StyledButton onPress={onPress}>Click me</StyledButton>)
    fireEvent.press(getAllByText('Click me')[1])
    expect(onPress).toHaveBeenCalled()
  })
})
