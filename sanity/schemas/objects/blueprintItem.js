import {defineType} from 'sanity'

export default defineType({
    name: 'blueprintItem',
    title: 'Blueprint Item',
    type: 'object',
        fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string'
            },
            {
                name: 'blueprint',
                title: 'Blueprint',
                type: 'imageType',
            },
            {
                name: 'info1',
                title: 'Info 1',
                type: 'blockModule'
            },
            {
                name: 'info2',
                title: 'Info 2',
                type: 'blockModule'
            },
            {
                name: 'info3',
                title: 'Info 3',
                type: 'blockModule'
            },

        ],
        
})