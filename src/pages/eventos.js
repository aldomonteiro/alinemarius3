import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import cover from '../assets/images/capa-workshop.jpg'

class Eventos extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={cover} alt="" /></span>
            <h2>Workshop seu filho vai brilhar!</h2>
            <p>No dia 29 de setembro estarei em Curitiba, na
              &nbsp;<a href="http://www.unitaculturacorporal.com.br/">Unitá</a> às 15h00 para
              realizar o workshop "Seu filho vai brilhar!".</p>
            <p>Nesse workshop vou te mostrar o trabalho que eu faço com as minhas filhas e
              te ajudar a aplicá-lo com os seus filhos.</p>

          </section>
        </div>

      </div>
    )
  }
}

export default Eventos

export const pageQuery = graphql`
  query EventosQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
