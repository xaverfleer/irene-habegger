import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = ({ bgImage }) => (
  <header
    id="header"
    style={{ backgroundImage: `url('images/overlay.png'), url(${bgImage})` }}
  >
    <div className="inner">
      <a href="/#" className="image avatar">
        <img src={avatar} alt="" />
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
