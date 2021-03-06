import React from 'react'
// import { Link } from 'gatsby'
import logo from '../../assets/images/rosto-aline-logo.jpg';

const Header = (props) => (
  <header id="header" className="alt">
    {/* <div style={{ position: 'absolute', top: '10px', right: '7%' }}>
      <Link to="/restrita">Área restrita</Link>
    </div> */}
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '0 10px' }}>
        <span className="logo"><img src={logo} alt="" style={{ borderRadius: '50%' }} /></span>
      </div>
      <div style={{ textAlign: 'center', padding: '0 10px' }}>
        <h1>Aline Marius</h1>
        <p>Transformando mães em educadoras</p>
      </div>
    </div>
  </header>
)

export default Header
