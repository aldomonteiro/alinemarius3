import React from 'react'
import FormCombinado from '../components/FormCombinado';
import pic from '../assets/images/combinadoScreenShot.jpg'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Combinado para rotina diária dos seus filhos</h2>
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
          <h3>Quer receber os combinados que faço na minha casa para manter a rotina das crianças?</h3>
          <p>Preencha o seu nome e e-mail que te enviarei para esse e-mail, ok?</p>
          <FormCombinado />
        </div>
      </div>
    </section>
  </Layout>          