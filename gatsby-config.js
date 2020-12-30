const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = {
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: { '/.netlify/functions/': '' },
      })
    )
  },
  siteMetadata: {
    title: 'Irene Habegger | Artist',
    author: 'Xaver Fleer',
    description: 'Irene Habegger | Personal website',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/content/pages` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `img`, path: `${__dirname}/static/img/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: { modulePath: `${__dirname}/src/cms/cms.js` },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}
