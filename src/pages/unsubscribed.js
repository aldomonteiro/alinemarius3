import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Você foi desinscrito da minha lista.</h2>
      <p>
        <Link to="/">Voltar para a página inicial e continuar navegando no site.</Link>
      </p>
    </section>
  </Layout>