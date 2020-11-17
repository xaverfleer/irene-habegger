import '../assets/css/style.css'

import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <div className="wrapper">
    <header className="header">
      <Link to="/" className="link logo">
        Irene HABEGGER
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__entry">
            <Link className="link" to="/paintings">
              Paintings
            </Link>
          </li>
          <li className="nav__entry">
            <Link className="link" to="/paintings">
              Drawings
            </Link>
          </li>
          <li className="nav__entry">
            <Link className="link" to="/videos">
              Videos
            </Link>
          </li>
          <li className="nav__entry">
            <Link className="link" to="/bio">
              Bio
            </Link>
          </li>
          <li className="nav__entry">
            <Link className="link" to="/contact">
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
