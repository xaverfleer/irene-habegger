import { graphql } from 'gatsby'

import Gallery from '../components/Gallery'

export default Gallery

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "drawings" } }) {
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
