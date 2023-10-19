import {defineType} from 'sanity'

export default defineType({
    name: 'itemSlider',
    title: 'Image',
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
                name: 'icon',
                title: 'Icon',
                type: 'imageType'
            },
            {
                name: 'image',
                title: 'Image',
                type: 'imageType'
            },

        ],
        
})