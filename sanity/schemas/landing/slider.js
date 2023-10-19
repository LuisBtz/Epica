import {defineType} from 'sanity'

export default defineType({
    name: 'slider',
    title: 'Slider Section',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
        fields: [
            {
                name: 'sliderTitle',
                title: 'Slider Section Title',
                type: 'blockModule'
            },
            {
                name: 'carrusel',
                title: 'Carousel',
                type: 'array',
                of: [
                    {
                        name: 'itemSlider',
                        title: 'Item',
                        type: 'itemSlider'
                    }
                ]
            }
        ],
        
})