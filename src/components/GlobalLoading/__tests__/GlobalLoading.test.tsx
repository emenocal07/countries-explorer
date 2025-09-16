import { render } from '@testing-library/react-native'
import React from 'react'
import { GlobalLoading } from '../GlobalLoading'

jest.mock('../../../store/globalLoading', () => ({
  useGlobalLoading: () => () => true,
}))

describe('GlobalLoading', () => {
  it('renders loading indicator when loading is true', () => {
    const { getByTestId } = render(<GlobalLoading />)
    expect(getByTestId('global-loading-indicator')).toBeTruthy()
  })
})
