import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Container, Header, ItensParaBaixa, ButtonsActionsContainer, TableContainer } from './styles'


import axios from 'axios';



// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'Caneta', 'caixa com 100', 'R$ 5.50', 10, "⬇️"),
  createData(1, 'Papel A4', 'caixa com 200', 'R$ 15.50', 1, "⬇️"),
  createData(2, 'Post-it (S)', 'caixa com 50', 'R$ 20.50', 5, "⬇️"),
  createData(3, 'Post-it (M)', 'caixa com 50', 'R$ 35.50', 7, "⬇️"),
  createData(4, 'Post-it (L)', 'caixa com 50', 'R$ 4.50', 12, "⬇️"),
];

export default function Produtos() {
  const [produtos2, setProdutos2] = React.useState(null)
  const [produtosParaBaixa, setProdutosBaixa] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://www.mocky.io/v2/5de5c69f2e00000d0031fe7c`)
      .then(res => {
        setProdutos2(res.data)
      })
    },[])
  
  function addProdutoParaBaixa (produtoParaBaixa) {
    let itemNaLista = produtosParaBaixa.filter((item) => produtoParaBaixa.id === item.id)

    if (itemNaLista.length > 0) {
      let newItens = produtosParaBaixa.map((item) => {

        if (item.id === itemNaLista[0].id) {
          return {...item, totalBaixar: item.totalBaixar + 1}
        }
        return item;
      })

      setProdutosBaixa(newItens)
    } else  {
      setProdutosBaixa([
        ...produtosParaBaixa, 
        {
          ...produtoParaBaixa,
          totalBaixar: 1
        }
      ])
    }
  }

  function confirmarSolicitacaoBaixa () {
    
    // axios.post("httpURL")
    //   .then(res => {
    //     setProdutos2(res.data)
    //   })
  }

    
  return (
    <React.Fragment>
      <Container>
        <Table style={{ width: "60%", margin: "20px", display: "table", "border-spacing": 0, "border-collapse": "collapse"}} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Produtos</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Medida</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Quantidade Disponivel</TableCell>
              <TableCell align="right">solicitar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos2 ? (produtos2.map(row => (
              <TableRow key={row.id}>
                <TableCell>{"#" + row.id + " " + row.produtos}</TableCell>
                <TableCell><img width="64px" height="64px" src={row.img} /></TableCell>
                <TableCell>{row.medida}</TableCell>
                <TableCell>{row.preco}</TableCell>
                <TableCell>{row.quantDisponivel}</TableCell>
                <TableCell align="right"><button onClick={() => addProdutoParaBaixa(row)}>{"⬇️"}</button></TableCell>
              </TableRow>
            ))) : (
              <p>Sem itens</p>
            )
          }
          </TableBody>
        </Table>
        <Header>
          {produtosParaBaixa.map((item)=>(
            <ItensParaBaixa>{item.id} + {item.totalBaixar}</ItensParaBaixa>
          ))
          }
          <ButtonsActionsContainer>
            <Button variant="contained" color="secondary">Cancelar</Button>
            <Button variant="contained" color="Primary">Salvar</Button>
          </ButtonsActionsContainer>
        </Header>
      </Container>
    </React.Fragment>
  );
}
