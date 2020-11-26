import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import { walls as imgData } from '../appData'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Artist'

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

export default HomeIndex
