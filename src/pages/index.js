import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Gallery from '../components/Gallery'
import Layout from '../components/Layout'

const HomeIndex = ({ data }) => {
  const { frontmatter } = data.allMarkdownRemark.edges[0].node
  const siteTitle = frontmatter.title
  const {
    bgImage,
    meImage,
    intro,
    worksHeading,
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
    <Layout bgImage={bgImage} meImage={meImage}>
      <Helmet>
        <title>Natur im Garten | Valentin Thieme</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>{siteTitle}</h2>
          </header>
          <p>{intro}</p>
        </section>

        <section id="two">
          <h2>{worksHeading}</h2>

          <Gallery />
        </section>

        <section id="three">
          <h2>{contactHeading}</h2>
          <p>{contactIntro}</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      title="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      title="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Nachricht"
                      title="Nachricht"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Absenden" />
                  </li>
                </ul>
              </form>
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
      edges {
        node {
          frontmatter {
            bgImage
            meImage
            intro
            title
            worksHeading
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
  }
`
