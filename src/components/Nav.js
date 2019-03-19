import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={['s_intro', 's_combinado', 's_atividades', 's_ebook', 's_social', 's_depoimentos']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="s_intro">
                    <a href="#">Sobre mim</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="s_mamaesquefazem">
                    <a href="#">Mamães que fazem</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="s_combinado">
                    <a href="#">Combinado</a>
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
