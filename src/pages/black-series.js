import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import appData from '../appData'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Paintings'

  function ImgContainer({ props }) {
    return (
      <div className="img-container">
        <img alt={props.title} className="img-container__img" src={props.src} />
        <div className="img-container__description">
          <div className="img-container__title">{props.title}</div>
          <div>{props.technique}</div>
          <div>{props.size}</div>
          <div>{props.year}</div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>irene habegger / black series</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      {appData.blackSeries.map((img) => (
        <ImgContainer props={img} />
      ))}
    </Layout>
  )
}

export default HomeIndex
