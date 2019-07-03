import React from 'react'
import { graphql } from 'gatsby';
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
// import cover from '../assets/images/cover-depo.jpg'

class Depoimentos extends React.Component {
  render () {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <h2>Assista ao depoimento da Fernanda Bassy</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0d2IydOH4ls?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h2>Assista ao depoimento da Luciana Machado</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/N8xHLAUjoFU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </section>
        </div>

      </div>
    )
  }
}

export default Depoimentos

export const pageQuery = graphql`
  query DepoimentosQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
