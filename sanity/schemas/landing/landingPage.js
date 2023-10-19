export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    icon: () => `🌇`,
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'imageType'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'blockModule'
        },
        {
            name: 'googleMapsLink',
            title: 'Google Maps Link',
            type: 'string'
        },
        {
            name: 'tel',
            title: 'Tel',
            type: 'string'
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string'
        },
        {
            name: 'socialMedia',
            title: 'Social',
            type: 'array',
            of: [
                {
                    type: 'social'
                }
            ]
        },
        {
            name: 'whiteIcon',
            title: 'White Icon',
            type: 'imageType'
        },
        {
            name: 'brownIcon',
            title: 'Brown Icon',
            type: 'imageType'
        },
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'hero'
        },
        
        {
            name: 'render',
            title: 'Render Section',
            type: 'render'
        },
        {
            name: 'location',
            title: 'Location Section',
            type: 'location'
        },
        {
            name: 'slider',
            title: 'Slider Section',
            type: 'slider'
        },
        {
            name: 'gallery',
            title: 'Gallery Section',
            type: 'gallery'
        },
        {
            name: 'numbers',
            title: 'Numbers Section',
            type: 'numbers'
        },
        {
            name: 'blueprint',
            title: 'Blueprint Section',
            type: 'blueprint'
        },
        {
            name: 'contact',
            title: 'Contact Section',
            type: 'contact'
        },
          
    ],
    preview: {
        select: {
          title: 'title',
          media: 'thumbnail'
        }
      }
}