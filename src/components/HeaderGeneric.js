import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/rosto-aline-logo.jpg';

const HeaderGeneric = (props) => (
    <header id="header" className="alt">
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', padding: '0 10px' }}>
                <Link to="/">
                    <span className="logo"><img src={logo} alt="" style={{ borderRadius: '50%' }} /></span>
                </Link>
            </div>
            <div style={{ textAlign: 'center', padding: '0 10px' }}>
                <h1>Aline Marius</h1>
                <p>Transformando mães em educadoras</p>
            </div>
        </div>
        <Link to="/">
            Voltar para a Página Inicial
        </Link>
    </header>

    /* <header id="header" className="alt">
    <div style={{ display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
            <Link to="/">
                <span className="logo"><img src={logo} alt="" style={{ borderRadius: '50%' }} /></span>
            </Link>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
            <br />
            <h1>Aline Marius</h1>
            <p>Transformando mães em educadoras</p>
        </div>
    </div>
    <Link to="/">
        Voltar para a Página Inicial
    </Link>
    </header> */

)

export default HeaderGeneric
