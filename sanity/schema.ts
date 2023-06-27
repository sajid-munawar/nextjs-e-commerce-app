import { type SchemaTypeDefinition } from 'sanity'
import { heroImage } from './lib/heroImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage],
}
