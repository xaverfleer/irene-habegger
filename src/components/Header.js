import React from 'react'

import Footer from './Footer'
import Image from './Image'
import overlay from '../assets/scss/images/overlay.png'

const Header = ({ bgImage, meImage }) => (
  <header
    id="header"
    style={{ backgroundImage: `url(${overlay}), url(${bgImage})` }}
  >
    <div className="inner">
      <a href="/#" className="image avatar">
        <Image />
      </a>
      <h1>
        <strong>Ich bin Valentin Thieme</strong>, Gartenbauer mit Sinn für
        Natürlichkeit
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
