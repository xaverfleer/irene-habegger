import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Contact'

  return (
    <Layout>
      <Helmet>
        <title>{siteDescription}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      I look forward to your message.
    </Layout>
  )
}

export default HomeIndex
