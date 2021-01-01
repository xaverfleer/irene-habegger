import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

export default ({ data }) => {
  const { htmlDescription, htmlTitle, img } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{htmlTitle}</title>
        <meta name="description" content={htmlDescription} />
      </Helmet>
      <div class="gallery gallery-bio">
        <ImgContainer
          props={{
            name: 'bio',
            noCaption: true,
            src: img.publicURL,
            title: 'Irene',
          }}
        />
      </div>
      <article
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></article>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "bio" } }) {
      frontmatter {
        htmlDescription
        htmlTitle
        img {
          publicURL
        }
      }
      html
    }
  }
`
