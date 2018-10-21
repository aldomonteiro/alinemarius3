import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
// import cover from '../assets/images/cover-redes.jpg'

class Depoimentos extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            {/* <span className="image main"><img src={cover} alt="" /></span> */}
            <h2>Visite as minhas redes sociais e acompanhe o meu trabalho!</h2>
            <p>Estou divulgando diariamente o trabalho que faço em casa no Instagram e no Facebook.</p>
            <p>Siga, curta e compartilhe para fazer com que esse trabalho seja mais divulgado e me
              incentive a continuar fazendo isso.</p>
            <ul className="icons">
              <li><a href="https://www.instagram.com/alinemarius01/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
              <li><a href="https://www.facebook.com/alinemarius/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.youtube.com/c/AlineMarius" className="icon fa-youtube alt"><span className="label">Youtube</span></a></li>
            </ul>
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
