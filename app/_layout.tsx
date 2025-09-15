import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { theme } from '@theme/paperTheme'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ROUTES } from '../src/constants/routes'
import '../src/i18n/index'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: ROUTES.HOME,
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Macondo: require('@assets/fonts/Macondo-Regular.ttf'),
    Oldenburg: require('@assets/fonts/Oldenburg-Regular.ttf'),
    SpaceMono: require('@assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootLayoutNav />
      </SafeAreaView>
    </PaperProvider>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name={ROUTES.INDEX} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTES.HOME} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTES.COUNTRIES_LIST} options={{ title: 'Countries List' }} />
        <Stack.Screen name={ROUTES.COUNTRY_DETAIL} options={{ title: 'Country Detail' }} />
      </Stack>
    </ThemeProvider>
  )
}
