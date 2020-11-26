import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import { portraits } from '../appData'

const HomeIndex = () => {
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
        <title>{portraits.title}</title>
        <meta name="description" content={portraits.title} />
      </Helmet>
      {portraits.imgs.map((img) => (
        <ImgContainer props={img} />
      ))}
    </Layout>
  )
}

export default HomeIndex
