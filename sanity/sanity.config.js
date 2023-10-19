import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { structure } from './src/structure'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  name: 'default',
  title: 'Epica',

  projectId: 'hg0le39r',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool(), simplerColorInput()],

  schema: {
    types: schemaTypes,
  },
})
