import LanguageSelector from '@components/LanguageSelector/LanguageSelector'
import { Text, View } from '@components/Themed'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import { ROUTES } from '@constants/routes'
import { styles } from './HomeScreen.styles'

export default function HomeScreen() {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LanguageSelector />
      <Text>{t('home.title')}</Text>
      <Button
        title="Click here to explore Countries"
        onPress={() => router.push(ROUTES.COUNTRIES_LIST)}
      />
    </View>
  )
}
