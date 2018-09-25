import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import cover from '../assets/images/cover-redes.jpg'

class Depoimentos extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={cover} alt="" /></span>
            <h2>Instagram</h2>
            <h2>Youtube</h2>
            <h2>Facebook</h2>
          </section>
        </div>

      </div>
    )
  }
}

export default Depoimentos

export const pageQuery = graphql`
  query RedesSociaisQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
