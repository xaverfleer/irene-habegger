module.exports = {
  siteMetadata: {
    title: 'Natur im Garten | Valentin Thieme',
    author: 'Xaver Fleer',
    description:
      'Naturnahe Gartenberatung | Gezielte Pflege und Unterhalt bestehender Gärten | Kleinere Umänderungen und Neubauten | Terrassen und Dachbepflanyungen ',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/content/pages/` },
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
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: { modulePath: `${__dirname}/src/cms/cms.js` },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}
