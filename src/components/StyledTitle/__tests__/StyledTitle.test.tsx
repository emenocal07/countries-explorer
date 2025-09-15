import { render } from '@testing-library/react-native'
import React from 'react'
import StyledTitle from '../StyledTitle'

describe('StyledTitle', () => {
  it('renders with Macondo font and correct text', () => {
    const { getByText } = render(<StyledTitle>Test Title</StyledTitle>)
    expect(getByText('Test Title')).toBeTruthy()
  })
})
