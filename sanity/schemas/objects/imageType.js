import {defineType} from 'sanity'

export default defineType({
    name: 'imageType',
    title: 'Image',
    type: 'image',
        fields: [
            {
                name: 'textoAlternativo',
                type: 'string',
                title: 'Alternative text',
                validation: Rule => [
                    Rule.required().error('Alternative text reuired'),
                  ]
            },
        ],
        
})