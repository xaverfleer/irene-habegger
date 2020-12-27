import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import { wall as imgData } from '../appData'

export default () => {
  const siteDescription =
    'Irene Habegger is an Argentinean artist who was born in Buenos Aires in 1989.'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Artist</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="imgs--index">
        <ImgContainer props={imgData.imgs[2]} />
        <ImgContainer props={imgData.imgs[1]} />
      </div>
    </Layout>
  )
}
