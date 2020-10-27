import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template = ({ bgImage, children }) => (
  <div>
    <Header bgImage={bgImage} />
    {children}
  </div>
)

export default Template
