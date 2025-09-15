import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { SegmentedButtons } from 'react-native-paper'
import { styles } from './LanguageSelector.styles'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [selected, setSelected] = useState(i18n.language)

  useEffect(() => {
    setSelected(i18n.language)
  }, [i18n.language])

  const handleChange = (value: string) => {
    setSelected(value)
    i18n.changeLanguage(value)
  }

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={selected}
        onValueChange={handleChange}
        buttons={[
          { value: 'en-US', label: 'English', labelStyle: { fontSize: 14 } },
          { value: 'es-ES', label: 'Español', labelStyle: { fontSize: 14 } },
        ]}
        style={styles.segmented}
      />
    </View>
  )
}

export default LanguageSelector
