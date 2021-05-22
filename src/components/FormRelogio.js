import React from 'react'

const FormRelogio = (props) => (
  <section id="contact">
    <div className="inner">
      <form action="https://mailmkt.quickdesign.com.br/subscribe" method="POST" accept-charset="utf-8">
        <div className="field half first">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
        </div>
        <input type="hidden" name="list" value="XGbRfyi4vjpfNvOcLEQ9Rg" />
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

export default FormRelogio
