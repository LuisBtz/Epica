import {defineType} from 'sanity'

export default defineType({
    title: 'Block Module',
    name: 'blockModule',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
        ],
        // lists: [], // no lists, thanks
        // Marks let you mark up inline text in the block editor.
        marks: {
          decorators: [{ title: 'Strong', value: 'strong' },{title: 'Emphasis', value: 'em' }],
        },
      },
    ],
  })