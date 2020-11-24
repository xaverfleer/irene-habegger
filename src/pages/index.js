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
      <div className="img-container">
        <img
          alt="pared-02"
          className="img-container__img"
          src="img/pared-03.jpg"
        />
        <div className="img-container__description">
          <div className="img-container__title">Wall 1</div>
          <div>acrylic, oil and coal on canvas</div>
          <div>155 x 100 cm</div>
          <div>2017</div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeIndex
