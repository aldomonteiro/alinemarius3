import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
// import Img from "gatsby-image";
// import Ebook from '../components/Ebook';
// import { graphql } from 'gatsby'

import Header from '../components/Header'
import Nav from '../components/Nav'
import cover_sobre from '../assets/images/rosto-aline-frente.jpg'
import depo1 from '../assets/images/depo-fernanda-rosto.png';
import depo2 from '../assets/images/depo-luciana-rosto.png';
import picEbook from '../assets/images/ebook.jpg';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="s_intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Quem é a Aline?</h2>
                </header>
                <p>Sou mãe, pedagoga, professora. Acredito que as mães devem e podem desenvolver
                  os seus filhos em casa e o meu trabalho é te mostrar como.
                </p>
                <ul className="actions">
                  <li><Link to="/sobre" className="button">Saiba mais</Link></li>
                </ul>
              </div>
              <span className="image"><img src={cover_sobre} alt="" /></span>
            </div>
          </section>

          <section id="s_eventos" className="main special">
            <header className="major">
              <h2>Eventos</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-check"></span>
                <h3>Seu filho vai brilhar</h3>
                <p>Esse já foi pra conta. Estive em Curitiba no dia 29/09, com o workshop <b>Seu filho vai brilhar!</b><br />
                  Mais informações.</p>
              </li>
              <li>
                <span className="icon major style3 fa-question"></span>
                <h3>São Paulo?</h3>
                <p>Estou planejando um evento presencial em São Paulo, ainda em 2018. Vou levar a experiência
                  do workshop <b>Seu filho vai brilhar</b> até você, mãe paulistana</p>
              </li>
              <li>
                <span className="icon major style5 fa-question"></span>
                <h3>Quer a Aline na sua cidade?</h3>
                <p>Clique no botão abaixo para saber de mais detalhes e como posso ir até a sua cidade levar o meu workshop <b>Seu filho vai brilhar.</b></p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/eventos" className="button">Saiba mais</Link></li>
              </ul>
            </footer>
          </section>

          <section id="s_ebook" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Baixe o meu E-book</h2>
                </header>
                <p>Veja as 23 dicas que eu tenho para você melhorar o comportamento dos seus filhos!
                </p>
                <ul className="actions">
                  <li><Link to="/ebook" className="button">Saiba mais</Link></li>
                </ul>
              </div>
              <span className="image"><img src={picEbook} alt="" /></span>
            </div>
          </section>

          <section id="s_social" className="main special">
            <header className="major">
              <h2>Nas redes sociais</h2>
              <p>Divulgo diariamente o que estou fazendo na minha casa e com as mães que ajudo nas minhas redes sociais. Vá lá, me siga, curta e acompanhe.
                É um grande incentivo para continuar fazendo o meu trabalho.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <a href="https://www.youtube.com/c/AlineMarius">
                  <span className="icon fa-youtube"></span>
                  <strong>4882</strong> visualizações
                </a>
              </li>
              <li className="style2">
                <a href="https://www.instagram.com/alinemarius01/">
                  <span className="icon fa-instagram"></span>
                  <strong>692</strong> seguidores
                </a>
              </li>
              <li className="style4">
                <a href="https://www.facebook.com/alinemarius/">
                  <span className="icon fa-facebook"></span>
                  <strong>1706</strong> curtidas
                </a>
              </li>
            </ul>
            {/* <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p> */}
            <footer className="major">
              <ul className="actions">
                <li><Link to="/redes-sociais" className="button">Saiba mais</Link></li>
                {/* <li>
                  <Ebook>
                    <Img fluid={this.props.data.imgEbook.childImageSharp.fluid} />
                  </Ebook>
                </li> */}
              </ul>
            </footer>
          </section>

          <section id="s_depoimentos" className="main special">
            <header className="major">
              <h2>Depoimentos</h2>
            </header>
            <ul className="features">
              <li>
                <span className="depo"><img src={depo1} alt="" style={{ borderRadius: '50%', maxWidth: 200, maxHeight: 200 }} /></span>
                <h3>Fernanda Bassy</h3>
                <i>Foi muito enriquecedor trazer as atividades pedagógicas para dentro de casa."</i>
              </li>
              <li>
                <span className="depo"><img src={depo2} alt="" style={{ borderRadius: '50%', maxWidth: 200, maxHeight: 200 }} /></span>
                <h3>Luciana Machado</h3>
                <p><i>A Aline trouxe para nós a importância do conhecimento em casa!</i></p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/depoimentos" className="button">Saiba mais</Link></li>
              </ul>
            </footer>
          </section>
        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
