import React from 'react'
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-evenly;
`;

export const CampoContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export default function LocationForm({values, handleChange}) {
    function handleChangeValues (who, value) {
        handleChange({ ...values, [who]: value });
    }

    function findLocalWithCep (cep) {
        if (cep.length >= 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => {
                    const localData = {
                        cep: res.data.cep,
                        logradouro: res.data.logradouro,
                        complemento: res.data.complemento,
                        cidade: res.data.localidade,
                        uf: res.data.uf
                    }
                    handleChange(localData)
                })
        }
    }

    return (
        <FormContainer>
            <div>
                <CampoContainer>
                    <TextField
                        required
                        id="standard-required"
                        label="CEP"
                        defaultValue="" 
                        onChange={(event)=> findLocalWithCep(event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                        id="standard-required"
                        label="Logradouro"
                        value={values.logradouro}
                        onChange={(event)=> handleChangeValues("logradouro", event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                        id="standard-required"
                        label="Complemento"
                        value={values.complemento}
                        onChange={(event)=> handleChangeValues("complemento", event.target.value)}
                    />
                </CampoContainer>
            </div>
            <div>
                <CampoContainer>
                    <TextField
                        id="standard-required"
                        label="Número"
                        type="number"
                        defaultValue="" 
                        onChange={(event)=> handleChangeValues("numero", event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                        id="standard-required"
                        label="Cidade"
                        value={values.cidade}
                        defaultValue="" 
                        onChange={(event)=> handleChangeValues("cidade", event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                        id="standard-required"
                        label="UF"
                        value={values.uf}
                        onChange={(event)=> handleChangeValues("uf", event.target.value)}
                    />
                </CampoContainer>
            </div>
        </FormContainer>
    )
}
