import { Text, View } from '@components/Themed'
import { ROUTES } from '@constants/routes'
import { router } from 'expo-router'
import { Button } from 'react-native'
import { styles } from './CountriesListScreen.styles'

export default function CountriesListScreen() {
  return (
    <View style={styles.container}>
      <Text>List of Countries</Text>
      <Button
        title="Click here to explore the details of Cryptón"
        onPress={() => router.push({ pathname: ROUTES.COUNTRY_DETAIL, params: { id: '456' } })}
      />
    </View>
  )
}
