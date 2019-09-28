import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Você já está inscrito nessa lista!</h2>
      <p>Pode ficar tranquila, vou te mandar as minhas novidades logo logo.</p>
      <p>
        <Link to="/">Voltar para a página inicial e continuar navegando no site.</Link>
      </p>
    </section>
  </Layout>