import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Modal from 'react-responsive-modal';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Img from "gatsby-image";
// import Ebook from '../components/Ebook';
// import { graphql } from 'gatsby'

import Header from '../components/Layout/Header'
import Layout from '../components/LayoutAntigo'
import Nav from '../components/Nav'
import TopToast from '../components/TopToast'
import cover_sobre from '../assets/images/rosto-aline-frente.jpg'
import depo1 from '../assets/images/depo-fernanda-rosto.png';
import depo2 from '../assets/images/depo-luciana-rosto.png';
import picEbook from '../assets/images/ebook.jpg';
import picCombinado from '../assets/images/combinadoScreenShot.jpg';
import picAtiv1 from '../assets/images/meninas-fazendo-atividades.png';
import picMQF from '../assets/images/mamaesquefazem.jpg';
import FormNewsletter from '../components/FormNewsletter';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
      openModal: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
    toast.dismiss();
  }

  handleOpenModal = () => {
    this.setState({ openModal: true })
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  componentDidMount () {
    toast('Receba minhas atualizações por e-mail!', {
      onClick: this.handleOpenModal,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  render () {

    return (
      <Layout>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />
        <TopToast />
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
          {/* <section id="s_news" className="main">
            <div className="spotlight">
              <div className="content">
                <p>Tem mais de 100 mamães na minha lista!</p>
                <p>Cadastre-se aqui para você também receber tudo o que compartilho com elas..
                </p>
                <ul className="actions">
                  <li><input type="text" placeholder="Seu nome" /> </li>
                  <li><input type="text" placeholder="E-mail" /> </li>
                  <li><input type="submit" value="Cadastrar" /> </li>
                </ul>
              </div>
            </div>
          </section> */}
          {/* Seção mamaes que fazem */}
          <section id="s_mamaesquefazem" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Mamães que Fazem!</h2>
                </header>
                <p>Conheça o projeto Mamães que Fazem! Compartilhamento, desenvolvimento e educação.</p>
                <ul className="actions">
                  <li><Link to="/mamaesquefazem" className="button">Saiba mais</Link></li>
                </ul>
              </div>
              <span className="image"><img src={picMQF} alt="" /></span>
            </div>
          </section>
          {/* Seção mamaes que fazem */}

          {/* Seção combinado */}
          <section id="s_combinado" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Baixe os combinados para manter a rotina</h2>
                </header>
                <p>Receba a tabela de combinados que uso em casa para manter a rotina das crianças!
                </p>
                <ul className="actions">
                  <li><Link to="/combinado" className="button">Saiba mais</Link></li>
                </ul>
              </div>
              <span className="image"><img src={picCombinado} alt="" /></span>
            </div>
          </section>
          {/* Seção combinado */}

          {/* Seção atividades */}
          <section id="s_atividades" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Atividades para você fazer em casa</h2>
                </header>
                <p>Veja a minha série de atividades que você pode fazer em casa com as suas crianças!
                </p>
                <ul className="actions">
                  <li><Link to="/atividades" className="button">Saiba mais</Link></li>
                </ul>
              </div>
              <span className="image"><img src={picAtiv1} alt="" /></span>
            </div>
          </section>
          {/* Seção atividades */}


          {/* Seção ebook */}
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
          {/* Seção ebook */}

          {/* Seção nas redes */}
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
                  <strong>6254</strong> visualizações
                </a>
              </li>
              <li className="style2">
                <a href="https://www.instagram.com/alinemarius01/">
                  <span className="icon fa-instagram"></span>
                  <strong>1121</strong> seguidores
                </a>
              </li>
              <li className="style4">
                <a href="https://www.facebook.com/alinemarius/">
                  <span className="icon fa-facebook"></span>
                  <strong>17 mil</strong> curtidas
                </a>
              </li>
            </ul>
            {/* <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p> */}
            <footer className="major">
              <ul className="actions">
                <li><Link to="/redes-sociais" className="button">Saiba mais</Link></li>
              </ul>
            </footer>
          </section>
          {/* Seção nas redes */}

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
        <Modal
          open={this.state.openModal}
          contentLabel="Receba as minhas atualizações no seu e-mail!"
          onClose={this.handleCloseModal}
          center
        >
          <FormNewsletter />
        </Modal>
      </Layout>
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
