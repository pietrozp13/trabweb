import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Produtos from './Screens/Produtos/Produtos'

import styled from 'styled-components';

const Header = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;


export default function App() {
  return (
    <Router>
      <Header>
        <Link to="/Produtos">Produtos</Link>
        <Link to="/Cadastro">Cadastro</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Relatorio">Relatorio</Link>
      </Header>
      <div>
        <Switch>
          <Route path="/Cadastro">
            <Cadastro />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Produtos">
            <Produtos />
          </Route>
          <Route path="/Relatorio">
            <Relatorio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Cadastro() {
  return <h2>Cadastro</h2>;
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