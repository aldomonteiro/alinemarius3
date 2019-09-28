import React from 'react'

const Contact = (props) => (
  <section id="contact">
    <div className="inner">
      <form action="http://mailmkt.quickdesign.com.br/subscribe" method="POST" accept-charset="utf-8">
        <div className="field half first">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" placeholder="Informe o seu nome" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="O e-mail que você mais usa.." />
          <br />
        </div>
        <input type="hidden" name="list" value="aHOYasEB3Q58541763jKY892MQ" />
        <input type="hidden" name="subform" value="yes" />
        <ul className="actions">
          <li><input type="submit" name="submit" id="submit" value="Quero o E-book!" className="special" /></li>
        </ul>
      </form>
      {/* <form name="contact" action="/success" method="post" netlify-honeypot="bot-field" netlify> */}
      {/* <form name="contact" method="post" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" placeholder="Informe o seu nome" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="O seu melhor e-mail.." />
          <br />
        </div>
        <ul className="actions">
          <li><input type="submit" value="Quero o E-book!" className="special" /></li>
        </ul>
      </form> */}
    </div>
  </section>
)

export default Contact