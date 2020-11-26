import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import { portraits } from '../appData'

const HomeIndex = () => (
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

export default HomeIndex
