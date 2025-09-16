jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'languageSelector.english') return 'English'
      if (key === 'languageSelector.spanish') return 'Español'
      if (key === 'languageSelector.close') return 'Cerrar'
      if (key === 'languageSelector.open') return 'Abrir selector de idioma'
      return key
    },
    i18n: { language: 'en-US', changeLanguage: jest.fn() },
  }),
}))

import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import LanguageSelector from '../LanguageSelector'

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
