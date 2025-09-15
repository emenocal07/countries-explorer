import React from 'react'
import { StyleSheet, View } from 'react-native'
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

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 9999,
  },
})
