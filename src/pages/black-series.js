import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

import bowlAndStone from '../../static/img/black-02-Schale-und-Stein.jpg'

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
      <div className="thumbs">
        <ImgContainer props={imgs[0]} />
        <div className="img-container">
          <img
            alt="Foto"
            className="img-container__img"
            src="/img/black-03-Rinde.jpg"
          />
          <div className="img-container__description">
            <div className="img-container__title">Wall 1</div>
            <div>acrylic, oil and coal on canvas</div>
            <div>155 x 100 cm</div>
            <div>2017</div>
          </div>
        </div>
        <div className="img-container">
          <img
            alt="Foto"
            className="img-container__img"
            src="/img/black-04-No-name.jpg"
          />
          <div className="img-container__description">
            <div className="img-container__title">Wall 1</div>
            <div>acrylic, oil and coal on canvas</div>
            <div>155 x 100 cm</div>
            <div>2017</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeIndex
