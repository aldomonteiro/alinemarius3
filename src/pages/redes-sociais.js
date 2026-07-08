import React from 'react'
import { graphql } from 'gatsby';
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/Layout/HeaderGeneric'
// import cover from '../assets/images/cover-redes.jpg'

class Depoimentos extends React.Component {
  render () {

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
              <li><a href="https://www.instagram.com/alinemariusoficial/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
              <li><a href="https://www.facebook.com/alinemarius/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
              <li><a href="https://youtube.com/@AlineMarius" className="icon fa-youtube alt"><span className="label">Youtube</span></a></li>
            </ul>

            <h3>Meus canais no Youtube</h3>
            <ul>
              <li><a href="https://youtube.com/@AlineMarius">Aline Marius</a></li>
              <li><a href="https://youtube.com/@AlineMariusnaReal">Aline Marius na Real</a></li>
              <li><a href="https://youtube.com/@alinemarius-koraline">Aline Marius - Koraline</a></li>
            </ul>

            <h3>Playlists</h3>
            <ul>
              <li><a href="https://youtube.com/playlist?list=PLLYpnsK_fNJYKYH3w3Rs4ojINkPCYSkBP">Brincadeiras Psicomotoras</a></li>
              <li><a href="https://youtube.com/playlist?list=PLLYpnsK_fNJZcznHn7tYpKG0NldKF7o1o">Alfabetização psicomotora</a></li>
              <li><a href="https://youtube.com/playlist?list=PLLYpnsK_fNJaE98ESavu1gGhuqI06Sk0U">Dicas Materna</a></li>
              <li><a href="https://youtube.com/playlist?list=PLLYpnsK_fNJYZ1Z8pRKUCs--8zK-pfRVQ">Educação em Casa</a></li>
              <li><a href="https://youtube.com/playlist?list=PLLYpnsK_fNJYYSAAeaPzueHfDr7QVoiUg">Curso Matemática Básica</a></li>
            </ul>

            <h3>Materiais em PDF</h3>
            <ul>
              <li><a href="https://linktr.ee/pdf.alinemarius">PDF voltado à Educação Infantil</a></li>
              <li><a href="https://linktr.ee/pdf.ens.fun.alinemarius">PDF voltado ao Ensino Fundamental</a></li>
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
