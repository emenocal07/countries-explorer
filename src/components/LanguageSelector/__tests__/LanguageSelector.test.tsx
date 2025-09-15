import { render } from '@testing-library/react-native'
import React from 'react'
import LanguageSelector from '../LanguageSelector'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'en-US', changeLanguage: jest.fn() },
    t: (key: string) => key,
  }),
}))

describe('LanguageSelector', () => {
  it('renders language options', () => {
    const { getAllByText } = render(<LanguageSelector />)
    expect(getAllByText(/English|Español/)).toBeTruthy()
  })
})
