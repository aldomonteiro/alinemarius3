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

            <h2>Tempus veroeros</h2>
            <p>Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.</p>
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
