import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useGlobalLoading } from '../../store/globalLoading'

export const GlobalLoading = () => {
  const loading = useGlobalLoading((state) => state.loading)
  if (!loading) return null
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size={48} animating color="#6B4FAA" />
    </View>
  )
}

import { styles } from './GlobalLoading.styles'
