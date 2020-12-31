import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'

export default Gallery

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "wall" } }) {
      frontmatter {
        htmlDescription
        htmlTitle
        paintings {
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
