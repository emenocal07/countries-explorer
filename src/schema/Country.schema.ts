import { z } from 'zod'

export const CountrySchema = z.object({
  cca3: z.string().length(3),
  name: z.object({
    common: z.string(),
    official: z.string().optional(),
    nativeName: z
      .record(
        z.string(),
        z.object({
          official: z.string().optional(),
          common: z.string().optional(),
        })
      )
      .optional(),
    translations: z
      .record(
        z.string(),
        z.object({
          official: z.string().optional(),
          common: z.string().optional(),
        })
      )
      .optional(),
  }),
  flags: z.object({
    png: z.string().url(),
    svg: z.string().url(),
  }),
  capital: z.array(z.string()).optional(),
  population: z.number(),
  region: z.string(),
})

export const CountriesSchema = z.array(CountrySchema)
export type Country = z.infer<typeof CountrySchema>
