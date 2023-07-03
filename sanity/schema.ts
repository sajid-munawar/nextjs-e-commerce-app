import { type SchemaTypeDefinition } from 'sanity'
import { heroImage } from './lib/heroImage'
import { products } from './lib/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage,products],
}
