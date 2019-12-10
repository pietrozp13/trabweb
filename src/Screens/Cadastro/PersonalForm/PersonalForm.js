import React from 'react'
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
  

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

export default function PersonalForm({password, handleChange}) {
    const [values, setValues] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <FormContainer>
            <div>
                <CampoContainer>
                    <TextField
                        required
                        id="standard-required"
                        label="Login"
                        defaultValue="" 
                        onChange={(event)=> console.log(event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                            required
                            id="standard-required"
                            label="Nome"
                            defaultValue="" 
                            onChange={(event)=> console.log(event.target.value)}
                        />
                </CampoContainer>
                <CampoContainer>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Data de nascimento"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </CampoContainer>
            </div>
            <div>
                <CampoContainer>
                    <TextField
                        required
                        id="standard-required"
                        label="Senha"
                        defaultValue="" 
                        onChange={(event)=> console.log(event.target.value)}
                    />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                            required
                            id="standard-required"
                            label="Confirmar senha"
                            defaultValue="" 
                            onChange={(event)=> console.log(event.target.value)}
                        />
                </CampoContainer>
                <CampoContainer>
                    <TextField
                            required
                            id="standard-required"
                            label="Sexo"
                            defaultValue="" 
                            onChange={(event)=> console.log(event.target.value)}
                        />
                </CampoContainer>
            </div>
        </FormContainer>
    )
}
