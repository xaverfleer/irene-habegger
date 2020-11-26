import '../assets/css/style.css'

import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <div className="wrapper">
    <aside className="aside">
      <Link to="/" className="link logo">
        Irene HABEGGER
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__entry">
            <Link className="link" to="/walls">
              Walls
            </Link>
          </li>
          <li className="nav__entry">
            <Link className="link" to="/black-series">
              Black series
            </Link>
          </li>
          <li className="nav__entry">
            <Link className="link" to="/portraits">
              Portraits
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
    </aside>
    <main>{children}</main>
    <footer className="footer">
      Created with ♥ by{' '}
      <a className="footer__link" href="mailto:xaver.fleer@gmail.com">
        Xaver Fleer
      </a>
    </footer>
  </div>
)

export default Layout
