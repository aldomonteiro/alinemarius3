import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer id="footer">
    <section>
      <h2>Sobre mim</h2>
      <p>Sou mãe, professora, pedagoga. Acredito que desenvolver seus filhos em casa é tão importante quanto mandá-los para a escola</p>
      <ul className="actions">
        <li><Link to="/sobre" className="button">Saiba mais</Link></li>
        <li><Link to="/" className="button">Página Inicial</Link></li>
      </ul>
    </section>
    <section>
      <h2>Fale comigo</h2>
      <dl className="alt">
        <dt>Whatsapp</dt>
        <dd>(041) 99641-1476</dd>
        <dt>Email</dt>
        <dd><a href="#">aline@alinemarius.com.br</a></dd>
      </dl>
      <ul className="icons">
        <li><a href="https://www.facebook.com/alinemarius/" className="icon fa-facebook alt">
          <span className="label">Facebook</span></a>
        </li>
        <li><a href="https://www.instagram.com/alinemarius01/" className="icon fa-instagram alt">
          <span className="label">Instagram</span></a>
        </li>
        <li><a href="https://www.youtube.com/c/AlineMarius" className="icon fa-youtube alt">
          <span className="label">Youtube</span></a>
        </li>
      </ul>
    </section>
    {/* <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p> */}
  </footer>
)

export default Footer
