import {defineType} from 'sanity'

export default defineType({
    name: 'render',
    title: 'Render Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'renderImage',
                title: 'Render Image',
                type: 'imageType'
            },
            {
                name: 'renderText',
                title: 'Render Text',
                type: 'blockModule'
            }
        ],
        
})