import '../assets/css/style.css'

import React from 'react'
import { Link } from 'gatsby'

const LinkEntry = ({ props }) => (
  <li className="nav__entry">
    <Link className="link" to={props.to}>
      {props.label}
    </Link>
  </li>
)

const Layout = ({ children }) => (
  <div className="wrapper">
    <aside className="aside">
      <Link to="/" className="link logo">
        Irene HABEGGER
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <LinkEntry props={{ to: '/wall', label: 'Wall' }} />
          <LinkEntry props={{ to: '/portraits', label: 'Portraits' }} />
          <LinkEntry props={{ to: '/hedge', label: 'Hedge' }} />
          <LinkEntry
            props={{ to: '/skin-and-stone', label: 'Skin and Stone' }}
          />
          <LinkEntry
            props={{
              to: '/in-the-morning-light',
              label: 'In the morning light',
            }}
          />
          <LinkEntry props={{ to: '/bio', label: 'Bio' }} />
          <LinkEntry props={{ to: '/contact', label: 'Contact' }} />
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
