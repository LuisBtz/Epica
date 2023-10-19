import {defineType} from 'sanity'

export default defineType({
    name: 'galleryItem',
    title: 'Gallery Item',
    type: 'object',
        fields: [
            {
                name: 'itemName',
                title: 'Title',
                type: 'string'
            },
            {
                name: 'description',
                title: 'Description',
                type: 'text',
            },
            {
                name: 'image',
                title: 'Image',
                type: 'imageType'
            },

        ],
        
})