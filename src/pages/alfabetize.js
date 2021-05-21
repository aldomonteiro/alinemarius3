import React from 'react'
import FormAlfabetize from '../components/FormAlfabetize';
import pic from '../assets/images/combinadoScreenShot.jpg'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Semana Alfabetize em 3 meses</h2>
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
          <h3>Quero participar da Semana Alfabetize em 3 meses!!</h3>
          <p>Preencha o seu nome e e-mail para se inscrever, ok?</p>
          <FormAlfabetize />
        </div>
      </div>
    </section>
  </Layout> 
