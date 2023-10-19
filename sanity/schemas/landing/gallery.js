import {defineType} from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Gallery Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'galleryTitle',
                title: 'Gallery Section Title',
                type: 'blockModule'
            },
            {
                name: 'galleryDescription',
                title: 'Gallery Section Description',
                type: 'text'
            },
            {
                name: 'galleryMainImage',
                title: 'Gallery Section Main Image',
                type: 'imageType'
            },
            {
                name: 'gallery',
                title: 'Gallery',
                type: 'array',
                of: [
                    {
                        name: 'galleryItem',
                        title: 'Gallery Item',
                        type: 'galleryItem'
                    }
                ]
            }
        ],
        
})