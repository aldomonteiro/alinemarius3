import React from 'react'
import FormParede from '../components/FormParede';
import pic from '../assets/images/paredaoLeitura.png'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Famílias Silábicas para a sua parede da leitura</h2>
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
          <h3>Para receber o material com as famílias silábicas do paredão da leitura..</h3>
          <p>Preencha o seu nome e e-mail que te enviarei para esse e-mail, ok?</p>
          <FormParede />
        </div>
      </div>
    </section>
  </Layout>          
