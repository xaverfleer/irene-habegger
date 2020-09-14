import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>Seite nicht gefunden</h1>
      <p>
        Die Seite ist entweder momentan nicht verfügbar, wurde verschoben oder
        existiert nicht mehr.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
