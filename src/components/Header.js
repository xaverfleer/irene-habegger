import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Ich bin Valentin Thiele</strong>, Gartenbauer mit Sinn für
        Natürlichkeit
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
