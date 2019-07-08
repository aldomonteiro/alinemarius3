import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Você já está inscrito nessa lista e já deve ter recebido esse material!</h2>
      <p>Mas se não recebeu, você pode baixá-lo aqui diretamente:</p>
      <h3>
        <a href="https://drive.google.com/open?id=1zG0YDVB7aZag5vDCD8e8HnAkMwbPuudv">
          Link para o download do E-book.
        </a>
      </h3>
      <p>
        <Link to="/">Voltar para a página inicial e continuar navegando no site.</Link>
      </p>
    </section>
  </Layout>