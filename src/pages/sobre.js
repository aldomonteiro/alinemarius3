import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import cover from '../assets/images/rosto-aline-frente.jpg'

class Sobre extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={cover} alt="" /></span>
            <h2>Quem é Aline?</h2>
            <p>Olá, eu sou a Aline Marius, mãe, professora, pedagoga.</p>

            <p> Acredito que desenvolver seus filhos em casa é tão importante quanto mandá-los para a escola.</p>

            <p>Graças a mais de quinze anos em experiência na educação (trabalhando em escolas
              públicas, privadas, com alunos em particular e atualmente como mãe de gêmeas),
              descobri que o ponto fundamental para o desenvolvimento intelectual de cada indivíduo
              está dentro de seu próprio lar, e não somente na escola conforme acredita a sociedade
              atual. </p>

            <p>Este tempo também me mostrou o quanto é difícil para uma criança que não consegue
              acompanhar um determinado conteúdo por falta de quesitos básicos que poderiam ser
              desenvolvidos ou até mesmo reafirmados em casa com seus pais.</p>

            <p>Após adquirir esta bagagem e poder testemunhar famílias com filhos muito bem
              sucedidos como também o contrário, resolvi criar este espaço para pais que realmente
              querem o sucesso intelectual de seus filhos e creem que a escola é uma ampliação d
              e seu lar pois, hoje, acredito que o ser humano, sustentado pelo amor e aperfeiçoado
              pelos que os educam dentro de casa, pode ser cada dia mais feliz e realizado, mesmo
              com todas as adversidades da vida (que não são poucas!).</p>

            <h2>Quer conhecer o meu trabalho de perto?</h2>
            <p>Me acompanhe no
            &nbsp;<a href="https://www.instagram.com/alinemarius01/">Instagram</a>,
            &nbsp;<a href="https://www.facebook.com/alinemarius/">Facebook</a> e
            &nbsp;<a href="https://www.youtube.com/c/AlineMarius">Youtube</a>.</p>
          </section>
        </div>

      </div>
    )
  }
}

export default Sobre

export const pageQuery = graphql`
  query SobreQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
