import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import translationEn from './locales/en-US/translation.json'
import translationES from './locales/es-ES/translation.json'
import LocalStorageService from '../services/LocalStorage.service'
import { STORAGE_KEYS } from '../services/LocalStorage.service'

const resources = {
  'es-ES': { translation: translationES },
  'en-US': { translation: translationEn },
}

const initI18n = async () => {
  let savedLanguage = await LocalStorageService.getItem(STORAGE_KEYS.LANGUAGE)

  if (!savedLanguage) {
    const locales = Localization.getLocales()
    savedLanguage = locales && locales.length > 0 ? locales[0].languageTag : 'es-ESP'
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'es-ESP',
    interpolation: {
      escapeValue: false,
    },
  })
}

initI18n()

export default i18n
