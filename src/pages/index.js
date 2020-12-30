import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

export default ({ data }) => {
  const { painting01, painting02 } = data.markdownRemark.frontmatter
  const siteDescription =
    'Irene Habegger is an Argentinean artist who was born in Buenos Aires in 1989.'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Artist</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="imgs--index">
        <ImgContainer props={painting01} />
        <ImgContainer props={painting02} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "landingPage" } }) {
      frontmatter {
        painting01 {
          dimensions
          img {
            publicURL
          }
          technique
          title
          year
        }
        painting02 {
          dimensions
          img {
            publicURL
          }
          technique
          title
          year
        }
      }
    }
  }
`
