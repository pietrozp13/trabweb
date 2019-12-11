import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Container} from './styles'


import axios from 'axios';


export default function Relatorio() {
  const [relatorioData, setRelatorioData] = React.useState(null)

  React.useEffect(() => {
    axios.get(`http://www.mocky.io/v2/5df0947f3100000e008f08f8`)
      .then(res => {
        setRelatorioData(res.data)
      })
    },[])
    
  return (
    <React.Fragment>
      <Container>
        <Table style={{ margin: "20px", display: "table", "border-spacing": 0, "border-collapse": "collapse"}} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Usuário</TableCell>
              <TableCell>Data da solicitação</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Valor total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatorioData ? (relatorioData.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.dataSolicitacao}</TableCell>
                <TableCell>{row.produtoNome}</TableCell>
                <TableCell>{row.quantidade}</TableCell>
                <TableCell>{row.valorTotal}</TableCell>
              </TableRow>
            ))) : (
              <p>Sem itens</p>
            )
          }
          </TableBody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
