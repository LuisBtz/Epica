import {defineType} from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'heroBackground',
                title: 'Hero Background',
                type: 'imageType'
            },
            {
                name: 'slogan',
                title: 'Slogan',
                type: 'blockModule'
            }
        ],
        
})