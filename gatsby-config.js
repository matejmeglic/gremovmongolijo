/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gremo v Mongolijo - Mongolia Charity Rally 2014`,
    description: `Dobrodelna odprava Matej Meglič - Katja Kern iz Slovenije v Mongolijo`,
    author: `Matej Meglic`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/contents`,
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 950,
              loading: "lazy",
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
   
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gremo v Mongolijo 2014`,
        short_name: `Gremo v Mongolijo`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/contents/images/19-square.jpg`, 
      },
    },

    `gatsby-plugin-offline`,

    `gatsby-plugin-react-helmet`,


  ],
}