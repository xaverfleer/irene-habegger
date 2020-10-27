import React from 'react'
import Footer from './Footer'

const Header = ({ bgImage, meImage }) => (
  <header
    id="header"
    style={{ backgroundImage: `url('images/overlay.png'), url(${bgImage})` }}
  >
    <div className="inner">
      <a href="/#" className="image avatar">
        <img src={meImage} alt="" />
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
