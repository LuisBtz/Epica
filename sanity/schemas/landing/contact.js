import {defineType} from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Contact Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'ContactSectionsTitle',
                title: 'Contact Title',
                type: 'blockModule'
            },
            {
                name: 'description',
                title: 'Description',
                type: 'text'
            },
            {
                name: 'buttonText',
                title: 'Button Text',
                type: 'string'
            },
            {
                name: 'formTitle',
                title: 'Form Title',
                type: 'string'
            },
            {
                name: 'descriptionForm',
                title: 'Form Description',
                type: 'text'
            },
        ],
        
})