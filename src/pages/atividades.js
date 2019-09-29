import React from 'react'
import { graphql } from 'gatsby';
import get from 'lodash/get'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/Layout/HeaderGeneric'
import FormAtividades from '../components/FormAtividades';
import pic from '../assets/images/meninas-fazendo-atividades.png'

class Atividades extends React.Component {
  render () {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <h2>Série atividades educativas para fazer em casa</h2>
            <div style={{
              display: 'grid',
              /* grid-template-columns: 50% 50%; */
              gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
              gridGap: '10px',
              color: '#444'
            }}>
              {/* <FadeLeft> */}
              <div style={{
                borderRadius: '5px',
                padding: '20px'
              }}>
                <img src={pic} alt="" style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: 'auto\9'
                }} />
              </div>
              <div style={{
                borderRadius: '5px',
                padding: '20px'
              }} >
                <h3>Vou te mandar algumas das atividades que faço em casa com as minhas crianças</h3>
                <p>Preencha o seu nome e e-mail que te enviarei para esse e-mail, ok?</p>
                <FormAtividades />
              </div>
            </div>
          </section>
        </div >

      </div >
    )
  }
}

export default Atividades

export const pageQuery = graphql`
  query AtividadesQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
