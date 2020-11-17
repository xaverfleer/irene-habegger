import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Artist'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Artist</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <img alt="main" className="img" src="img/foto.png" />
    </Layout>
  )
}

export default HomeIndex
