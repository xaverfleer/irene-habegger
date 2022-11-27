import { graphql } from 'gatsby'

import Gallery from '../components/Gallery'

export default Gallery

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "italianLandscapes" } }) {
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
