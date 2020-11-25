import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import bowlAndStone from '../../static/img/black-02-Schale-und-Stein.jpg'
import bark from '../../static/img/black-03-Rinde.jpg'
import unnamed from '../../static/img/black-04-No-name.jpg'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Paintings'

  const imgs = [
    {
      title: 'Bowl and stone',
      src: bowlAndStone,
      technique: 'oil on canvas',
      size: '150 x 200 cm',
      year: '2017',
    },
    {
      title: 'Bark',
      src: bark,
      technique: 'oil on canvas',
      size: '150 x 200 cm',
      year: '2016',
    },
    {
      title: 'Unnamed',
      src: unnamed,
      technique: 'oil on canvas',
      size: '150 x 200 cm',
      year: '2017',
    },
  ]

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
      {imgs.map((img) => (
        <ImgContainer props={img} />
      ))}
    </Layout>
  )
}

export default HomeIndex
