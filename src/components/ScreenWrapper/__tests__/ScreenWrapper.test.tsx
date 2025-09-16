import { render } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { ScreenWrapper } from '../ScreenWrapper'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'en-US', changeLanguage: jest.fn() },
    t: (key: string) => key,
  }),
}))

jest.mock('react-native-paper/src/components/MaterialCommunityIcon', () => {
  return {
    __esModule: true,
    default: (props: any) => null,
  }
})

describe('ScreenWrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <PaperProvider>
        <ScreenWrapper>
          <Text>Child content</Text>
        </ScreenWrapper>
      </PaperProvider>
    )
    expect(getByText('Child content')).toBeTruthy()
  })
})
