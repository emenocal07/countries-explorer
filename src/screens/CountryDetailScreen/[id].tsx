import StyledText from '@components/StyledText/StyledText'
import StyledTitle from '@components/StyledTitle/StyledTitle'
import { useCountriesQuery } from '@services/Countries.service'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Image, ScrollView, View } from 'react-native'
import { Button } from 'react-native-paper'
import { Country } from 'src/schema/Country.schema'
import { styles as detailStyles } from './CountryDetailScreen.styles'

export default function CountryDetailScreen() {
  const { id } = useLocalSearchParams()
  const { data: countries, isLoading, error } = useCountriesQuery()
  const country: Country | undefined = countries?.find((c) => c.cca3 === id)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { t, i18n } = useTranslation()

  if (isLoading) {
    return (
      <View style={detailStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#6B4FAA" />
        <StyledText style={{ marginTop: 16 }}>
          {t('countryDetail.loading', 'Cargando país...')}
        </StyledText>
      </View>
    )
  }
  if (error || !country) {
    return (
      <View style={detailStyles.loadingContainer}>
        <StyledText style={{ textAlign: 'center' }}>
          {t('countryDetail.notFound', 'No se encontró el país')}
        </StyledText>
      </View>
    )
  }

  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.flagContainer}>
        {!imageLoaded && (
          <View style={detailStyles.flagLoader}>
            <ActivityIndicator size="small" color="#6B4FAA" />
          </View>
        )}
        <Image
          source={{ uri: country.flags.png }}
          style={[detailStyles.flag, { opacity: imageLoaded ? 1 : 0 }]}
          resizeMode="cover"
          onLoad={() => setImageLoaded(true)}
        />
      </View>
      <ScrollView contentContainerStyle={detailStyles.infoContainer}>
        <StyledTitle style={detailStyles.countryName}>
          {i18n.language.startsWith('es')
            ? country.nameSpa || country.name.common
            : country.nameEng || country.name.common}
        </StyledTitle>
        <View style={detailStyles.infoRow}>
          <StyledText style={detailStyles.label}>{t('countryDetail.region', 'Región:')}</StyledText>
          <StyledText style={detailStyles.value}>{country.region}</StyledText>
        </View>
        <View style={detailStyles.infoRow}>
          <StyledText style={detailStyles.label}>
            {t('countryDetail.population', 'Población:')}
          </StyledText>
          <StyledText style={detailStyles.value}>{country.population.toLocaleString()}</StyledText>
        </View>
        {country.capital && (
          <View style={detailStyles.infoRow}>
            <StyledText style={detailStyles.label}>
              {t('countryDetail.capital', 'Capital:')}
            </StyledText>
            <StyledText style={detailStyles.value}>{country.capital.join(', ')}</StyledText>
          </View>
        )}
        <View style={detailStyles.infoRow}>
          <StyledText style={detailStyles.label}>{t('countryDetail.code', 'Código:')}</StyledText>
          <StyledText style={detailStyles.value}>{country.cca3}</StyledText>
        </View>
      </ScrollView>
      <View style={detailStyles.backButtonWrapper}>
        <Button
          mode="contained"
          icon="arrow-left"
          onPress={() => router.back()}
          style={detailStyles.backButton}
          labelStyle={{ color: '#fff', fontWeight: 'bold' }}
        >
          {t('countryDetail.back', 'Regresar')}
        </Button>
      </View>
    </View>
  )
}
