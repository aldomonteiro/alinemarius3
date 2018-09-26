import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'

class Depoimentos extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <h2>Ok! Recebi os seus dados</h2>
            <p>Agora, fique atenta(o) a sua caixa de entrada. Se você não
              receber nada, dá uma olhada na caixa de Spam ou de e-mails indesejados. Você vai receber
              as instruções para se inscrever na minha lista e fazer o download do E-book, tá bom?
            </p>
            <p>
              <Link to="/">Voltar para a página inicial e continuar navegando</Link>
            </p>
          </section>
        </div>

      </div>
    )
  }
}

export default Depoimentos

export const pageQuery = graphql`
  query SuccessQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
