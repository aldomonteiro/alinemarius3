import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={['intro', 'first', 'second', 'cta']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="s_intro">
                    <a href="#">Sobre mim</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="s_atividades">
                    <a href="#">Atividades</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="s_ebook">
                    <a href="#">Ebook</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="s_social">
                    <a href="#">Nas redes..</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="s_depoimentos">
                    <a href="#">Depoimentos</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
