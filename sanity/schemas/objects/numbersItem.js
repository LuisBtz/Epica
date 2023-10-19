import {defineType} from 'sanity'

export default defineType({
    name: 'numbersItem',
    title: 'Section Item',
    type: 'object',
        fields: [
            {
                name: 'number',
                title: 'Number',
                type: 'string'
            },
            {
                name: 'title',
                title: 'Title',
                type: 'string',
            },
            {
                name: 'description',
                title: 'Description',
                type: 'text'
            },

        ],
        
})