import {defineType} from 'sanity'

export default defineType({
    name: 'location',
    title: 'Location Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'map',
                title: 'Map image',
                type: 'imageType'
            },
            {
                name: 'locationLink',
                title: 'Location Link',
                type: 'string'
            },
            {
                name: 'locationTitle',
                title: 'Location Title',
                type: 'blockModule'
            },
            {
                name: 'sections',
                title: 'Sections',
                type: 'array',
                of: [
                    {
                        name: 'bigSection',
                        title: 'Big Section',
                        type: 'bigSection'
                    }
                    
                ]
            }
        ],
        
})