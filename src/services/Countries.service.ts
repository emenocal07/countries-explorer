import { API_COUNTRIES_BASE_URL } from '@env'
import { useQuery } from '@tanstack/react-query'
import { CountriesSchema } from '../schema/Country.schema'

const FIELDS = 'cca3,name,flags,capital,population,region'
export const API_URL = `${API_COUNTRIES_BASE_URL}?fields=${FIELDS}`

export function useCountriesQuery() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const res = await fetch(API_URL)
      const data = await res.json()
      const parsed = CountriesSchema.safeParse(data)
      if (!parsed.success) throw new Error('Invalid data from API')
      return parsed.data
    },
  })
}
