import React from 'react'

const FormMatematica = (props) => (
  <section id="contact">
    <div className="inner">
      <form action="http://mailmkt.quickdesign.com.br/subscribe" method="POST" accept-charset="utf-8">
        <div className="field half first">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
        </div>
        <input type="hidden" name="list" value="ktGPHtmBUpMUuV892c8hTogQ" />
        <input type="hidden" name="subform" value="yes" />
        <ul className="actions">
          <li>
            <input type="submit" name="submit" id="submit" value="Quero receber!" className="special" />
          </li>
        </ul>
      </form>
    </div>
  </section>
)

export default FormMatematica
