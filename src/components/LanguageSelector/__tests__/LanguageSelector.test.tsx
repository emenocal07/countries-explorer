import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import LanguageSelector from '../LanguageSelector'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'en-US', changeLanguage: jest.fn() },
    t: (key: string) => key,
  }),
}))

describe('LanguageSelector', () => {
  it('renders language options', () => {
    const { getByRole, getAllByText } = render(
      <PaperProvider>
        <LanguageSelector />
      </PaperProvider>
    )
    fireEvent.press(getByRole('button'))
    expect(getAllByText(/English|Español/)).toBeTruthy()
  })
})
