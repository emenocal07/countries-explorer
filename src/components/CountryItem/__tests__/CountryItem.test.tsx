import { render } from '@testing-library/react-native'
import React from 'react'
import { CountryItem } from '../CountryItem'

describe('CountryItem', () => {
  it('renders with required props', () => {
    const { getByText } = render(<CountryItem name="United States" flagUrl="" region="Americas" />)
    expect(getByText('United States')).toBeTruthy()
  })
})
