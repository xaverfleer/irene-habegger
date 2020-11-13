import '../assets/css/style.css'

import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <div class="wrapper">
    <header class="header">
      <Link to="/" class="logo">
        Irene Habegger
      </Link>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__entry">Paintings</li>
          <li class="nav__entry">Drawings</li>
          <li class="nav__entry">Video</li>
          <li class="nav__entry">Bio</li>
          <li class="nav__entry">Contact</li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer></footer>
  </div>
)

export default Layout
