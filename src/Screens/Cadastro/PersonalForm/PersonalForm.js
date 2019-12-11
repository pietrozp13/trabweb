import React from 'react'
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';

import { getAge, minData } from '../../../utils';

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

const currencies = [
    {
      value: 'M',
      label: 'Masculino',
    },
    {
      value: 'F',
      label: 'Feminino',
    }
  ];

export default function PersonalForm({values, handleChange}) {
    
    const handleDateChange = date => {
        handleChangeValues("dataNascimento", date)
    };

    const handleChangeValues = (who, prop) => {
        handleChange(who, prop)
    }

    const maxDate = new Date(minData(5)).toISOString().slice(0,10)
    const minDate = new Date(minData(150)).toISOString().slice(0,10)

    return (
        <FormContainer>
            <div>
                <CampoContainer>
                    <TextField
                        required
                        id="standard-required"
                        label="Login"
                        defaultValue="" 
                        onChange={(event)=> handleChangeValues("login", event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                            id="standard-required"
                            label="Nome"
                            defaultValue="" 
                            onChange={(event)=> handleChangeValues("nome", event.target.value)}
                        />
                </CampoContainer>
                <CampoContainer style={{ flexDirection: "column" }}>
                    <KeyboardDatePicker
                        margin="normal"
                        required
                        id="date-picker-dialog"
                        label="Date de nascimento"
                        format="MM/dd/yyyy"
                        value={values.dataNascimento}
                        minDate={minDate}
                        maxDate={maxDate}
                        helperText="Data entre 5 a 120 anos"
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <p>Idade: {getAge(values.dataNascimento)}</p>
                </CampoContainer>
            </div>
            <div>
                <CampoContainer>
                    <TextField
                        required
                        id="standard-required"
                        label="Senha"
                        type="password"
                        defaultValue=""
                        onChange={(event) => handleChangeValues("password", event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                            required
                            error={values.password !== values.confPassword}
                            helperText={values.password !== values.confPassword ? "Senhas diferentes" : false}
                            id="standard-required"
                            label="Confirmar senha"
                            type="password"
                            defaultValue=""
                            onChange={(event)=> handleChangeValues("confPassword", event.target.value)}
                        />
                </CampoContainer>
                <CampoContainer>
                <TextField
                    id="standard-select-currency"
                    select
                    required
                    label="Sexo"
                    value={values.sexo}
                    onChange={(event)=> handleChangeValues("sexo", event.target.value)}
                    >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </CampoContainer>
            </div>
        </FormContainer>
    )
}
