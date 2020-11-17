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
      <div className="imgs-group imgs-group-3">
        <img alt="pared-01" className="img" src="img/pared-01.jpg" />
        <img alt="pared-02" className="img" src="img/pared-03.jpg" />
        <img alt="pared-03" className="img" src="img/pared-02.jpg" />
      </div>
    </Layout>
  )
}

export default HomeIndex
