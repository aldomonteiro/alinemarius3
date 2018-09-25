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
                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
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
                <span className="icon major style1 fa-calendar"></span>
                <h3>Seu filho vai brilhar</h3>
                <p>Estarei em Curitiba no dia 29/09, com o workshop <b>Seu filho vai brilhar!</b><br />
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

          <section id="s_social" className="main special">
            <header className="major">
              <h2>Nas redes sociais</h2>
              <p>Divulgo todo dia o que estou fazendo na minha casa e com as mães que ajudo nas minhas redes sociais. Vá lá, me siga, curta e acompanhe.
                É um grande incentivo para continuar fazendo o meu trabalho.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-youtube"></span>
                <strong>4882</strong> visualizações
              </li>
              <li className="style2">
                <span className="icon fa-instagram"></span>
                <strong>691</strong> seguidores
              </li>
              <li className="style4">
                <span className="icon fa-facebook"></span>
                <strong>1681</strong> curtidas
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Saiba mais</Link></li>
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

          <section id="s_cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
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