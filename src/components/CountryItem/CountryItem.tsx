import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './CountryItem.styles'

interface CountryItemProps {
  name: string
  flagUrl?: string
  region?: string
}

export const CountryItem: React.FC<CountryItemProps> = ({ name, flagUrl, region }) => (
  <View style={styles.card}>
    {flagUrl && <Image source={{ uri: flagUrl }} style={styles.flag} resizeMode="contain" />}
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      {region && <Text style={styles.region}>{region}</Text>}
    </View>
  </View>
)
