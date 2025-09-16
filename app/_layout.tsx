import { GlobalLoading } from '@components/GlobalLoading/GlobalLoading'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { theme } from '@theme/paperTheme'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
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

const queryClient = new QueryClient()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require('@assets/fonts/Roboto-VariableFont.ttf'),
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
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <RootLayoutNav />
          <GlobalLoading />
        </SafeAreaView>
      </PaperProvider>
    </QueryClientProvider>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name={ROUTES.INDEX} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTES.HOME} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTES.COUNTRIES_LIST} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTES.COUNTRY_DETAIL} options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
