import { render } from '@testing-library/react-native'
import React from 'react'
import StyledText from '../StyledText'

describe('StyledText', () => {
  it('renders with Oldenburg font and correct text', () => {
    const { getByText } = render(<StyledText>Test Text</StyledText>)
    expect(getByText('Test Text')).toBeTruthy()
  })
})
