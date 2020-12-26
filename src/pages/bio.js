import React from 'react'
import Helmet from 'react-helmet'

import ImgContainer from '../components/ImgContainer'
import Layout from '../components/Layout'

import yo from '../../static/img/yo_.jpg'

export default () => {
  const siteDescription = 'Irene Habegger | Bio'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Bio</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div class="gallery gallery-bio">
        <ImgContainer
          props={{ name: 'bio', noCaption: true, src: yo, title: 'Irene' }}
        />
      </div>
      <h2>Bio</h2>
      <p>
        Irene Habegger is an Argentinean artist who was born in Buenos Aires in
        1989. There she started to study drawing and painting at the painting
        school of Guillermo Roux. In 2014 she moved to Switzerland, where she
        obtained a degree in Fine Arts from the University of the Arts Bern. She
        completed her studies in Italy, where she did a master's degree in
        painting at the Accademia di Belle Arti di Brera in Milan. She currently
        lives between Italy and Switzerland.
      </p>
      <h2>Exhibitions</h2>
      <p>
        <ul>
          <li>2020 Kunsthaus Steffisburg, Cantonale Berne Jura, CH</li>
          <li>2017 Kunsthaus Langenthal, Fifteen, Diploma exhibition, CH</li>
          <li>
            2016 Musée jurassien des Arts, Moutier, Cantonale Berne Jura, CH
          </li>
          <li>
            2014 Centro cultural El Faro. Pinturas (solo exhibition), Buenos
            Aires, AR
          </li>
          <li>
            2013 VII Salon of Contemporary Art of San Isidro, Buenos Aires, AR
          </li>
        </ul>
      </p>
      <h2>Prizes</h2>
      <ul>
        <li>
          2014 Second prize 33 th Ward School Plein Air Painting competition,
          Buenos Aires, AR
        </li>
        <li>
          2011 First prize LIV Buenos Aires Annual Salon of Plein Air Painting
          2011, AR
        </li>
      </ul>
    </Layout>
  )
}
