import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/rosto-aline-logo.jpg';

const HeaderGeneric = (props) => (
    <header id="header" className="alt">
        <Link to="/">
            <span className="logo"><img src={logo} alt="" style={{ borderRadius: '50%' }} /></span>
        </Link>
        <h1>Aline Marius</h1>
        <p>Transformando mães em educadoras</p>
        <Link to="/">
            Voltar para a Página Inicial
        </Link>
    </header>
)

export default HeaderGeneric
