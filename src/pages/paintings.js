import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Paintings'

  return (
    <Layout>
      <Helmet>
        <title>irene habegger / paintings</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="thumbs">
        <img alt="Foto" className="thumbs__thumb" src="/img/painting01.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting02.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting03.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting04.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting05.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting06.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting07.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting08.png" />
        <img alt="Foto" className="thumbs__thumb" src="/img/painting09.png" />
      </div>
    </Layout>
  )
}

export default HomeIndex
