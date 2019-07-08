import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

export default () =>
  <Layout>
    <section id="content" className="main">
      <h1><span role="img" aria-label="Sucesso!">🙌</span></h1>
      <h2>Recebi os seus dados</h2>
      <p>Agora, fique atenta(o) a sua caixa de entrada. Se você não
        receber nada, dá uma olhada na caixa de Spam ou de e-mails indesejados. Você vai receber
        as instruções para fazer o download do material, tá bom?
      </p>
      <p>
        <Link to="/">Voltar para a página inicial e continuar navegando</Link>
      </p>
    </section>
  </Layout>