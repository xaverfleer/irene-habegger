import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template = ({ bgImage, children, meImage }) => (
  <div>
    <Header bgImage={bgImage} meImage={meImage} />
    {children}
  </div>
)

export default Template
