import { render } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'
import { ScreenWrapper } from '../ScreenWrapper'

describe('ScreenWrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ScreenWrapper>
        <Text>Child content</Text>
      </ScreenWrapper>
    )
    expect(getByText('Child content')).toBeTruthy()
  })
})
