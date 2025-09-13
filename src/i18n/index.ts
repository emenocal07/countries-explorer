import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import translationEn from './locales/en-US/translation.json'
import translationES from './locales/es-ES/translation.json'
import LocalStorageService, { STORAGE_KEYS } from '../services/LocalStorage.service'

const resources = {
  'es-ES': { translation: translationES },
  'en-US': { translation: translationEn },
}

let language = 'es-ES'

try {
  const locales = Localization.getLocales()
  language = locales && locales.length > 0 ? locales[0].languageTag : 'es-ES'
} catch {
  language = 'es-ES'
}

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'es-ES',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
