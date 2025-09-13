import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { styles } from './CountryDetailScreen.styles'

export default function CountryDetailScreen() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del país</Text>
      <Text style={styles.id}>ID: {id}</Text>
    </View>
  )
}
