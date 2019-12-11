import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import { Check, Close } from '@material-ui/icons';



import { Container, Header, ItensParaBaixa, ButtonsActionsContainer } from './styles'


import axios from 'axios';


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
    console.log("teste")
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
                <TableCell><img alt="Imagem produto" width="64px" height="64px" src={row.img} /></TableCell>
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
            <IconButton size="medium">
              <Close htmlColor="red" />
            </IconButton>
            <IconButton size="medium" onClick={()=> confirmarSolicitacaoBaixa()}>
              <Check htmlColor="green" />
            </IconButton>
          </ButtonsActionsContainer>
        </Header>
      </Container>
    </React.Fragment>
  );
}
