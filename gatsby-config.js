require('dotenv').config({
  path: '.secrets',
});

module.exports = {
  siteMetadata: {
    title: 'Ploneconf 2019',
    subTitle: '21 - 27 October, Ferrara',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: 'http://localhost:8081/Plone2',
        logLevel: 'DEBUG',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Starter Plone',
        short_name: 'Plone',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007eb6',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
