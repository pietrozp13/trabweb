import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Produtos from './Screens/Produtos/Produtos'
import Cadastro from './Screens/Cadastro/Cadastro'

import styled from 'styled-components';

const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
`;


export default function App() {

function headerLinks () {
  return (
    <Header>
      <Link to="/Produtos">Produtos</Link>
      <Link to="/Cadastro">Cadastro</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Relatorio">Relatorio</Link>
    </Header>
  )
}


  return (
    <Router>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route path="/Cadastro">
            <Cadastro />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Produtos">
            {headerLinks()}
            <Produtos />
          </Route>
          <Route path="/Relatorio">
            {headerLinks()}
            <Relatorio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Login</h2>;
}

// function Produtos() {
//   return <h2>Produtos</h2>;
// }

function Relatorio() {
  return <h2>Relatorio</h2>;
}