import { ROUTES } from '@constants/routes'
import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import HomeScreen from '../index'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => {
      if (key === 'home.title') return 'Countries Explorer'
      if (key === 'home.description') return 'Explore information about countries around the world.'
      if (key === 'continue') return 'Continue'
      return fallback || key
    },
    i18n: { changeLanguage: jest.fn() },
  }),
}))

const mockedReplace = jest.fn()
jest.mock('expo-router', () => ({
  __esModule: true,
  get router() {
    return { replace: mockedReplace }
  },
}))

jest.mock('../../../services/LocalStorage.service', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(() => Promise.resolve(null)),
    setItem: jest.fn(() => Promise.resolve()),
  },
  STORAGE_KEYS: {
    HAS_SEEN_INTRO: 'has_seen_intro',
  },
}))

describe('HomeScreen', () => {
  it('renders title, description, and button', () => {
    const { getAllByText } = render(<HomeScreen />)
    expect(getAllByText('Continue')[1]).toBeTruthy()
    expect(getAllByText('Countries Explorer')[0]).toBeTruthy()
    expect(getAllByText(/Explore information/i)[0]).toBeTruthy()
  })

  it('calls router.replace when button is pressed', async () => {
    const { getAllByText } = render(<HomeScreen />)
    const button = getAllByText('Continue')[1]
    await act(async () => {
      fireEvent.press(button)
      await Promise.resolve()
    })
    expect(mockedReplace).toHaveBeenCalledWith(ROUTES.COUNTRIES_LIST)
  })
})
