import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template = ({ bgFluid, children, meFixed }) => (
  <div>
    <Header bgFluid={bgFluid} meFixed={meFixed} />
    {children}
  </div>
)

export default Template
