import {defineType} from 'sanity'

export default defineType({
    name: 'blueprint',
    title: 'Blueprint Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'blueprintSectionsTitle',
                title: 'Blueprint Title',
                type: 'blockModule'
            },
            {
                name: 'blueprints',
                title: 'Blueprints',
                type: 'array',
                of: [
                    {
                        name: 'numbersItem',
                        title: 'Blueprint Item',
                        type: 'blueprintItem'
                    }
                ]
            }
        ],
        
})