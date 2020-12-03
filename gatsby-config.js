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
    title: 'Permakultur Handwerk | Denis Peter',
    author: 'Xaver Fleer',
    description:
      'Permakultur Bern | Beratung, Planung und Gestaltung von Permakultur-Projekten',
  },
  plugins: [
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
