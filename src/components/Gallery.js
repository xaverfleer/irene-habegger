import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from './ImgContainer'
import Layout from './Layout'

const page = ({ data }) => {
  const {
    htmlDescription,
    htmlTitle,
    paintings,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Helmet>
        <title>{htmlTitle}</title>
        <meta name="description" content={htmlDescription} />
      </Helmet>
      <div className="gallery">
        {paintings.map((img) => (
          <ImgContainer props={img} />
        ))}
      </div>
    </Layout>
  )
}

export default page
