import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, View } from 'react-native'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const [_, setLanguage] = React.useState(i18n.language)

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setLanguage(lng)
    }
    i18n.on('languageChanged', handleLanguageChanged)
    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [i18n])

  return (
    <View>
      {/* Temporary buttons for language switching, remove later */}
      <Button title="Cambiar a inglés" onPress={() => i18n.changeLanguage('en-US')} />
      <Button title="Cambiar a español" onPress={() => i18n.changeLanguage('es-ES')} />
    </View>
  )
}

export default LanguageSelector
