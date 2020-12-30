import '../assets/css/style.css'

import React from 'react'

const ImgContainer = ({ props }) => (
  <div className="img-container">
    <img
      alt={props.title}
      className={`img-container__img ${
        props.name && `img-container__img--${props.name}`
      }`}
      src={props.src}
    />
    {!props.noCaption && (
      <div className="img-container__description">
        <span className="img-container__title">{props.title}, </span>
        <span>
          {[props.technique, props.dimensions, props.year]
            .filter((e) => e)
            .join(', ')}
        </span>
      </div>
    )}
  </div>
)

export default ImgContainer
