import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const HomeIndex = () => {
  const siteDescription =
    'Your message was submitted. Thank you for your message.'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Message is submitted</title>
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div id="main">
        <h2>Message is submitted</h2>
        <p>
          Thank you very much for your message. I will reply as soon as
          possible.
        </p>
      </div>
    </Layout>
  )
}

export default HomeIndex
