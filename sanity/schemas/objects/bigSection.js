import {defineType} from 'sanity'

export default defineType({
    name: 'bigSection',
    title: 'Image',
    type: 'object',
        fields: [
            {
                name: 'titleBigSection',
                title: 'Title Big Section',
                type: 'string'
            },
            {
                name: 'color',
                title: 'HEX Color',
                type: 'string'
            },
            {
                name: 'list',
                title: 'List',
                type: 'array',
                of: [
                    {
                        name: 'item',
                        title: 'Item',
                        type: 'string'
                    }
                ]
            }

        ],
        
})