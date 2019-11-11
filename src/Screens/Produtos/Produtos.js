import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Container, Header, ItensParaBaixa } from './styles'

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
  const [produtos, setProdutos] = React.useState([])

  function setProdutosPraBaixa (produto) {
      setProdutos([...produtos, produto])
  }

  return (
    <React.Fragment>
      <Container>
        <Table style={{ width: "70%", display: "table", "border-spacing": 0, "border-collapse": "collapse"}} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Produtos</TableCell>
              <TableCell>Medida</TableCell>
              <TableCell>Preco</TableCell>
              <TableCell>Quantidade Disponivel</TableCell>
              <TableCell align="right">solicitar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right"><button onClick={() => setProdutosPraBaixa(row.name)}>{row.amount}</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Header>
          {produtos.map(()=> {
            <ItensParaBaixa>{produtos}</ItensParaBaixa>
          })}
        </Header> */}
      </Container>
    </React.Fragment>
  );
}