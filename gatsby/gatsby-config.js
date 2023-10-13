/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Epica`,
    siteUrl: `https://nevadaprojects.com/`,
    description: `EPICA75`,
    twitterUsername: `@nepica75`,
    image: `./src/assets/images/screenshot.png`,
    author: `epica`
  },

  plugins: [
    "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
          icon: 'src/assets/images/icon.png',
        },
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `hg0le39r`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
