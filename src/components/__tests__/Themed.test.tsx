import { render } from '@testing-library/react-native'
import React from 'react'
import { Text, View } from '../Themed'

describe('Themed', () => {
  it('renders Text without crashing', () => {
    const { toJSON } = render(<Text>Test</Text>)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders View without crashing', () => {
    const { toJSON } = render(
      <View>
        <Text>Test</Text>
      </View>
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
