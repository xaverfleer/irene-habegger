import '../assets/css/style.css'

import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <div class="wrapper">
    <header class="header">
      <Link to="/" class="link logo">
        Irene Habegger
      </Link>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__entry">
            <Link class="link" to="/paintings">
              Paintings
            </Link>
          </li>
          <li class="nav__entry">
            <Link class="link" to="/paintings">
              Drawings
            </Link>
          </li>
          <li class="nav__entry">
            <Link class="link" to="/videos">
              Videos
            </Link>
          </li>
          <li class="nav__entry">
            <Link class="link" to="/bio">
              Bio
            </Link>
          </li>
          <li class="nav__entry">
            <Link class="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer></footer>
  </div>
)

export default Layout
