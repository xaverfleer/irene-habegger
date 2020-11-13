import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Videos'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Videos</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      I am Irene. Yeah!
    </Layout>
  )
}

export default HomeIndex
