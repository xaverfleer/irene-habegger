import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import { walls as imgData } from '../appData'

const page = () => (
  <Layout>
    <Helmet>
      <title>{imgData.title}</title>
      <meta name="description" content={imgData.title} />
    </Helmet>
    {imgData.imgs.map((img) => (
      <ImgContainer props={img} />
    ))}
  </Layout>
)

export default page
