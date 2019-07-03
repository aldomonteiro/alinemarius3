import React from 'react'
import { graphql } from 'gatsby';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import cover from '../assets/images/capa-workshop.jpg'

class Eventos extends React.Component {
  render () {

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
            <p>Neste workshop iremos conversar um pouco sobre o desenvolvimento infantil e os limites cognitivos das crianças.</p>
            <p>Falarei por que a escola não consegue fazer isto sozinha.</p>
            <p>Compartilharei com vocês dicas e estratégias de diálogos e brincadeiras do dia a dia que tem dado super certo, para que seu filho possa brilhar na escola.</p>
            <p>Irei te mostrar que é possível sim ter uma hora com qualidade com sua criança e o quanto isto faz a diferença no desenvolvimento dela.</p>
            <p>Sortearei presentes entre os participantes e degustaremos juntas um delicioso café da tarde. Este evento estará imperdível!</p>
            <p>Para saber mais detalhes de como reservar a sua vaga me manda uma mensagem no Whatsapp <span className="icon fa-whatsapp alt" />  (41) 9 9641 1476</p>
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
