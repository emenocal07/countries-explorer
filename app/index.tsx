import { ROUTES } from '@constants/routes'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { Platform } from 'react-native'

export default function Index() {
  useEffect(() => {
    if (Platform.OS === 'web' && window.location.pathname === '/') {
      window.location.replace(ROUTES.HOME)
    } else {
      router.replace(ROUTES.HOME)
    }
  }, [])
  return null
}
