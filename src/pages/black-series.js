import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import { blackSeries } from '../appData'

const HomeIndex = () => (
  <Layout>
    <Helmet>
      <title>{blackSeries.title}</title>
      <meta name="description" content={blackSeries.title} />
    </Helmet>
    {blackSeries.imgs.map((img) => (
      <ImgContainer props={img} />
    ))}
  </Layout>
)

export default HomeIndex
