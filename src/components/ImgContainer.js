import '../assets/css/style.css'

import React from 'react'

const ImgContainer = ({ props }) => (
  <div className="img-container">
    <img alt={props.title} className="img-container__img" src={props.src} />
    <div className="img-container__description">
      <span className="img-container__title">{props.title}, </span>
      <span>
        {[props.technique, props.size, props.year].filter((e) => e).join(', ')}
      </span>
    </div>
  </div>
)

export default ImgContainer
