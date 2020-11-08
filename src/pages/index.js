import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import ContactForm from '../components/ContactForm'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'

const HomeIndex = ({ data }) => {
  const allNodes = data.allMarkdownRemark.nodes
  const landingPageNode = allNodes.find(
    (node) => node?.frontmatter?.templateKey === 'landingPage'
  )
  const { frontmatter } = landingPageNode
  const siteTitle = frontmatter.title
  const {
    bgImage,
    meImage,
    intro,
    offerHeading,
    offerTitle01,
    offerTitle02,
    offerTitle03,
    offerText01,
    offerText02,
    offerText03,
    worksHeading,
    works,
    contactHeading,
    contactIntro,
    address01,
    address02,
    address03,
    phone,
    email,
  } = frontmatter

  const siteDescription =
    'Naturnahe Gartenberatung | Gezielte Pflege und Unterhalt bestehender Gärten | Kleinere Umänderungen und Neubauten | Terrassen und Dachbepflanyungen '

  return (
    <Layout
      bgFluid={bgImage.childImageSharp.fluid}
      meFixed={meImage.childImageSharp.fixed}
    >
      <Helmet>
        <title>Permakultur Bern | Denis Peter</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section>
          <header className="major">
            <h2>{siteTitle}</h2>
          </header>
          <p>{intro}</p>
        </section>

        <section>
          <h2>{offerHeading}</h2>
          <h3>{offerTitle01}</h3>
          <p>{offerText01}</p>
          <h3>{offerTitle02}</h3>
          <p>{offerText02}</p>
          <h3>{offerTitle03}</h3>
          <p>{offerText03}</p>
        </section>

        <section>
          <h2>{worksHeading}</h2>

          <Gallery works={works} />
        </section>

        <section>
          <h2>{contactHeading}</h2>
          <p>{contactIntro}</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <ContactForm email={email} />
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Addresse</span>
                  </h3>
                  {address01}
                  <br />
                  {address02}
                  <br />
                  {address03}
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Telefon</span>
                  </h3>
                  <a href={`tel:${phone}`}>{phone}</a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query indexMd {
    allMarkdownRemark {
      nodes {
        frontmatter {
          templateKey
          bgImage {
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          meImage {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          intro
          title
          offerHeading
          offerTitle01
          offerTitle02
          offerTitle03
          offerText01
          offerText02
          offerText03
          worksHeading
          works {
            caption
            description
            fluidThumb: img {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            fluidLarge: img {
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          contactHeading
          contactIntro
          address01
          address02
          address03
          phone
          email
        }
      }
    }
  }
`
