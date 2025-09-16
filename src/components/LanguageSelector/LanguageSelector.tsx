import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { FAB, Modal, Portal, SegmentedButtons } from 'react-native-paper'

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()
  const [selected, setSelected] = useState(i18n.language)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setSelected(i18n.language)
  }, [i18n.language])

  const handleChange = (value: string) => {
    setSelected(value)
    i18n.changeLanguage(value)
  }

  return (
    <Portal>
      <FAB
        icon="earth"
        style={styles.fab}
        color="#fff"
        onPress={() => setVisible(true)}
        uppercase={false}
      />
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={styles.modal}
      >
        <View style={styles.container}>
          <SegmentedButtons
            value={selected}
            onValueChange={handleChange}
            buttons={[
              {
                value: 'en-US',
                label: t('languageSelector.english', 'English'),
                labelStyle: { fontSize: 14 },
              },
              {
                value: 'es-ES',
                label: t('languageSelector.spanish', 'Español'),
                labelStyle: { fontSize: 14 },
              },
            ]}
            style={styles.segmented}
          />
          <FAB
            icon="close"
            style={styles.closeFab}
            color="#fff"
            onPress={() => setVisible(false)}
            label={t('languageSelector.close', 'Cerrar')}
            uppercase={false}
            small
          />
        </View>
      </Modal>
    </Portal>
  )
}

import { styles } from './LanguageSelector.styles'

export default LanguageSelector
