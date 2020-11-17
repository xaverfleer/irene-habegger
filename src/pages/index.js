import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const HomeIndex = () => {
  const siteDescription = 'Irene Habegger | Artist'

  return (
    <Layout>
      <Helmet>
        <title>Irene Habegger | Artist</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="imgs-group imgs-group-3">
        <img alt="pared-01" className="img" src="img/pared-01.jpg" />
        <img alt="pared-02" className="img" src="img/pared-03.jpg" />
        <img alt="pared-03" className="img" src="img/pared-02.jpg" />
      </div>
      <div className="imgs-group imgs-group-2">
        <img alt="artwork" className="img" src="img/seleccion-Joel.jpg" />
        <img alt="artwork" className="img" src="img/seleccion-02.jpg" />
      </div>
      <div className="imgs-group imgs-group-2">
        <img alt="artwork" className="img" src="img/seleccion-Sascha.jpg" />
        <img alt="artwork" className="img" src="img/seleccion-Selin.jpg" />
      </div>
      <div className="imgs-group imgs-group-3">
        <img alt="artwork" className="img" src="img/seleccion-01.jpg" />
        <img alt="artwork" className="img" src="img/seleccion-Xaver.jpg" />
        <img alt="artwork" className="img" src="img/seleccion-Marco.jpg" />
      </div>
    </Layout>
  )
}

export default HomeIndex
