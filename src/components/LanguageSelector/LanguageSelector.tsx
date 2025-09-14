import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, View } from 'react-native'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [_, setLanguage] = React.useState(i18n.language)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  return (
    <View>
      <Button title="Cambiar a inglés" onPress={() => i18n.changeLanguage('en-US')} />
      <Button title="Cambiar a español" onPress={() => i18n.changeLanguage('es-ES')} />
    </View>
  )
}

export default LanguageSelector
