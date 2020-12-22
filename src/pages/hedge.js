import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import { hedge as imgData } from '../appData'

export default () => (
  <Layout>
    <Helmet>
      <title>{imgData.title}</title>
      <meta name="description" content={imgData.title} />
    </Helmet>
    <div className="gallery">
      {imgData.imgs.map((img) => (
        <ImgContainer props={img} />
      ))}
    </div>
  </Layout>
)
