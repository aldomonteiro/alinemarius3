import React from 'react'
import SectionHeader from './SectionHeader'
import '../assets/scss/main.scss'

const FormNewsletter = () => (
  <div style={{ padding: '1.45rem' }}>
    <SectionHeader
      title="Deixe seu nome e e-mail"
      description="Para eu te cadastrar na minha lista."
    />

    <section id="contact">
      <div className="inner">
        <form action="https://mailmkt.quickdesign.com.br/subscribe" method="POST" acceptCharset="utf-8">
          <div>
            <label style={{ color: 'gray' }} htmlFor="name">Nome</label>
            <input style={{ border: '1px solid gray', color: 'gray' }} type="text" name="name" id="name" placeholder="Informe o seu nome" />
          </div>
          <div>
            <label style={{ color: 'gray' }} htmlFor="email">Email</label>
            <input style={{ border: '1px solid gray', color: 'gray' }} type="email" name="email" id="email" placeholder="O e-mail que você mais usa.." />
            <br />
          </div>
          <input type="hidden" name="list" value="hLO2tOPueHtztYNV87muPQ" />
          <input type="hidden" name="subform" value="yes" />
          <ul className="actions">
            <li><input type="submit" name="submit" id="submit" value="Inscrever!" className="special" /></li>
          </ul>
        </form>
      </div>
    </section>
  </div>
)

export default FormNewsletter
