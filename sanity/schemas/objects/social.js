import {defineType} from 'sanity'

export default defineType({
    name: 'social',
    title: 'Social',
    type: 'object',
        fields: [
            {
                name: 'icon',
                title: 'Icon',
                type: 'imageType'
            },
            {
                name: 'iconWhite',
                title: 'Icon',
                type: 'imageType'
            },
            {
                name: 'title',
                title: 'Title',
                type: 'string',
            },
            {
                name: 'link',
                title: 'Link',
                type: 'string'
            },

        ],
        
})