import React from 'react'
// import Link from 'gatsby-link'
import logo from '../assets/images/rosto-aline-logo.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" style={{ borderRadius: '50%' }} /></span>
        <h1>Aline Marius</h1>
        <p>Transformando mães em educadoras</p>
    </header>
)

export default Header
