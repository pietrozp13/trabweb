import React from 'react'
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import { Check } from '@material-ui/icons';

export const ConclueContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ConclueCadastro({handleLogin}) {
    return (
        <ConclueContainer>
            <h2>
                Concluir cadastro
            </h2>
            <h3>
                Efetuar login
            </h3>
            <IconButton size="large" onClick={()=> handleLogin()}>
              <Check htmlColor="green" />
            </IconButton>
        </ConclueContainer>
    )
}
