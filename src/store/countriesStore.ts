import { create } from 'zustand'
import { Country } from '../schema/Country.schema'

interface CountriesState {
  countries: Country[]
  isLoading: boolean
  error: string | null
  fetchCountries: (apiUrl: string) => Promise<void>
}

export const useCountriesStore = create<CountriesState>((set) => ({
  countries: [],
  isLoading: false,
  error: null,
  fetchCountries: async (apiUrl: string) => {
    set({ isLoading: true, error: null })
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      set({ countries: data, isLoading: false })
    } catch (err) {
      set({ error: (err as Error).message, isLoading: false })
    }
  },
}))
