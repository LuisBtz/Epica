import {defineType} from 'sanity'

export default defineType({
    name: 'numbers',
    title: 'Numbers Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'numbersSectionsTitle',
                title: 'Section Title',
                type: 'blockModule'
            },
            {
                name: 'numbers',
                title: 'Items',
                type: 'array',
                of: [
                    {
                        name: 'numbersItem',
                        title: 'Section Item',
                        type: 'numbersItem'
                    }
                ]
            }
        ],
        
})