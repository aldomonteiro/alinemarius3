import React from 'react'
import FormRelogio from '../components/FormRelogio';
import pic from '../assets/images/relogio.png'
import Layout from '../components/Layout';

export default () =>
  <Layout>
    <section id="content" className="main">
      <h2>Material para ensnar as horas!</h2>
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
            width: 'auto'
          }} />
        </div>
        <div style={{
          borderRadius: '5px',
          padding: '20px'
        }} >
          <h3>Para receber o material que vai te ajudar a ensinar as horas para a sua criança..</h3>
          <p>Preencha o seu nome e e-mail que te enviarei para esse e-mail, ok?</p>
          <FormRelogio />
        </div>
      </div>
    </section>
  </Layout>          
