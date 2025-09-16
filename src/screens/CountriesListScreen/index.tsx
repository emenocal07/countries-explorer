import { CountryItem } from '@components/CountryItem/CountryItem'
import { ScreenWrapper } from '@components/ScreenWrapper/ScreenWrapper'
import StyledText from '@components/StyledText/StyledText'
import StyledTitle from '@components/StyledTitle/StyledTitle'
import { useCountriesQuery } from '@services/Countries.service'
import { useRouter } from 'expo-router'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { useDebouncedValue } from 'src/hooks/useDebouncedValue'
import { Country } from 'src/schema/Country.schema'
import { useGlobalLoading } from 'src/store/globalLoading'
import { styles } from './CountriesListScreen.styles'

export default function CountriesListScreen() {
  const { data: countries, isLoading, error } = useCountriesQuery()
  const { t, i18n } = useTranslation()
  const setGlobalLoading = useGlobalLoading((state) => state.setLoading)
  const router = useRouter()
  const [search, setSearchRaw] = useState('')

  useEffect(() => {
    setGlobalLoading(isLoading)
    return () => setGlobalLoading(false)
  }, [isLoading, setGlobalLoading])

  const setSearch = (text: string) => {
    setSearchRaw(text)
    setPage(1)
  }
  const debouncedSearch = useDebouncedValue(search, 400)

  const PAGE_SIZE = 20
  const [page, setPage] = useState(1)

  const filteredCountries = useMemo(() => {
    if (!countries) return []
    if (!debouncedSearch) return countries
    const isSpanish = i18n.language.startsWith('es')
    return countries.filter((c) => {
      const name = isSpanish ? c.nameSpa : c.nameEng
      return name?.toLowerCase().includes(debouncedSearch.toLowerCase())
    })
  }, [countries, debouncedSearch, i18n.language])

  const totalItems = filteredCountries.length
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE))
  const paginatedCountries = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    return filteredCountries.slice(start, end)
  }, [filteredCountries, page])

  if (error) {
    return (
      <ScreenWrapper>
        <Text>Error: {String(error)}</Text>
      </ScreenWrapper>
    )
  }

  return (
    <ScreenWrapper>
      <StyledTitle style={styles.title}>
        {t('countriesList.title', 'List of Countries')}
      </StyledTitle>
      <TextInput
        style={styles.search}
        placeholder={t('countriesList.searchPlaceholder', 'Buscar país...')}
        value={search}
        onChangeText={setSearch}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={paginatedCountries}
        renderItem={({ item }: { item: Country }) => {
          const isSpanish = i18n.language.startsWith('es')
          const displayName = isSpanish
            ? item.nameSpa || item.name.common
            : item.nameEng || item.name.common
          return (
            <Pressable onPress={() => router.push(`/countries-list/${item.cca3}`)}>
              <CountryItem name={displayName} flagUrl={item.flags.png} region={item.region} />
            </Pressable>
          )
        }}
        keyExtractor={(item) => item.cca3}
      />
      {totalPages > 1 && (
        <>
          <StyledText style={styles.paginationText}>
            {t('countriesList.page', 'Página')} {page} {t('countriesList.of', 'de')} {totalPages}
          </StyledText>
          <View style={styles.paginationContainer}>
            <StyledText
              style={[styles.paginationButton, { color: page > 1 ? '#6B4FAA' : '#ccc' }]}
              onPress={() => page > 1 && setPage(page - 1)}
            >
              {t('countriesList.previous', 'Anterior')}
            </StyledText>
            <StyledText
              style={[styles.paginationButton, { color: page < totalPages ? '#6B4FAA' : '#ccc' }]}
              onPress={() => page < totalPages && setPage(page + 1)}
            >
              {t('countriesList.next', 'Siguiente')}
            </StyledText>
          </View>
        </>
      )}
    </ScreenWrapper>
  )
}
