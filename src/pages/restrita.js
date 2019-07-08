import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const Inicio = () => <p>Início</p>
const Cadstro = () => <p>Cadastro</p>
const Financeiro = () => <p>Financeiro</p>

const Restrita = () => (
  <>
    <nav>
      <Link to="/restrita">Início</Link>{" "}
      <Link to="/restrita/cadastro">Dados Cadastrais</Link>{" "}
      <Link to="/restrita/financeiro">Financeiro</Link>{" "}
    </nav>
    <Router>
      <Inicio path="/restrita" />
      <Cadstro path="/restrita/cadastro" />
      <Financeiro path="/restrita/financeiro" />
    </Router>
  </>
)

export default Restrita