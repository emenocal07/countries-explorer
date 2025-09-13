import AsyncStorage from '@react-native-async-storage/async-storage'

export const STORAGE_KEYS = {
  LANGUAGE: 'language',
}

class LocalStorageService {
  async setItem(key: string, value: string | number | boolean | null): Promise<void> {
    try {
      if (value === null) {
        await AsyncStorage.removeItem(key)
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.error('Error setting item in AsyncStorage:', error)
    }
  }

  async getItem<T = string>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key)
      return value !== null ? JSON.parse(value) : null
    } catch (error) {
      console.error('Error getting item from AsyncStorage:', error)
      return null
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error)
    }
  }

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error)
    }
  }

  async getAllKeys(): Promise<string[]> {
    try {
      const keys = await AsyncStorage.getAllKeys()
      return Array.from(keys)
    } catch (error) {
      console.error('Error getting all keys from AsyncStorage:', error)
      return []
    }
  }
}

export default new LocalStorageService()
