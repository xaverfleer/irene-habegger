import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

const Gallery = ({ images = DEFAULT_IMAGES }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen)
      setSelectedIndex(selectedIndex)
    },
    [lightboxIsOpen]
  )

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {images && (
        <div className="row">
          {images.map((obj, i) => {
            return (
              <GalleryItem
                source={obj.source}
                thumbnail={data.allFile.nodes[i].childImageSharp.fluid}
                caption={obj.caption}
                description={obj.description}
                position={obj.id}
                toggleLightbox={toggleLightbox}
                key={obj.id}
              />
            )
          })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
