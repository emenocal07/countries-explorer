import LanguageSelector from '@components/LanguageSelector/LanguageSelector'
import { ScreenWrapper } from '@components/ScreenWrapper/ScreenWrapper'
import StyledButton from '@components/StyledButton/StyledButton'
import StyledText from '@components/StyledText/StyledText'
import StyledTitle from '@components/StyledTitle/StyledTitle'
import { View } from '@components/Themed'
import { ROUTES } from '@constants/routes'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LocalStorageService, { STORAGE_KEYS } from '../../services/LocalStorage.service'
import { styles } from './HomeScreen.styles'

export default function HomeScreen() {
  const { t } = useTranslation()
  const [showHome, setShowHome] = useState(true)

  useEffect(() => {
    LocalStorageService.getItem<boolean>(STORAGE_KEYS.HAS_SEEN_INTRO).then(
      (value: boolean | null) => {
        if (value) {
          // setShowHome(false)
          // router.replace(ROUTES.COUNTRIES_LIST)
        }
      }
    )
  }, [])

  const handleContinue = async () => {
    await LocalStorageService.setItem(STORAGE_KEYS.HAS_SEEN_INTRO, true)
    setShowHome(false)
    router.replace(ROUTES.COUNTRIES_LIST)
  }

  // if (!showHome) return null

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.languageSelector}>
          <LanguageSelector />
        </View>
        <StyledTitle style={styles.title}>{t('home.title')}</StyledTitle>
        <View style={styles.descriptionWrapper}>
          <StyledText style={styles.descriptionText}>{t('home.description')}</StyledText>
        </View>
        <View style={styles.buttonWrapper}>
          <StyledButton mode="contained" onPress={handleContinue}>
            {t('continue', 'Continue')}
          </StyledButton>
        </View>
      </View>
    </ScreenWrapper>
  )
}
