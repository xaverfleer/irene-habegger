import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Layout = ({ bgFluid, children, meFixed }) => (
  <div>
    <Header bgFluid={bgFluid} meFixed={meFixed} />
    {children}
  </div>
)

export default Layout
