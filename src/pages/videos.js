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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ySRMDsJoIzM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="funny panda video"
      ></iframe>
    </Layout>
  )
}

export default HomeIndex