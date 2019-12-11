import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import PersonalForm from './PersonalForm/PersonalForm';
import LocationForm from './LocationForm/LocationForm';
import ConclueCadastro from './ConclueCadastro/ConclueCadastro'

import { CadastroContainer, CadastroContainerStyle, FormContainer, FormTitle } from './styles'

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [values, setValues] = React.useState({
    login: '',
    password: '',
    confPassword: '',
    nome: '',
    dataNascimento: new Date('2000-01-01T21:11:54'),
    sexo: 'F'
  });

  const [localValues, setLocalValues] = React.useState({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: ''
  })

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChange = (prop, newValue) => {
    setValues({ ...values, [prop]: newValue });
  };

  const handleChangeLocalValues = (newData) => {
    setLocalValues(newData);
  }

  const handleLogin = () => {
    console.log("cadastro:", {...values, ...localValues})
  }

  function personalDataForm () {
    return (
        <PersonalForm values={values} handleChange={handleChange}/>
    )
  }

  function locationDataForm () {
    return (
        <LocationForm values={localValues} handleChange={handleChangeLocalValues}/>
    )
  }

  function conclueCadastro () {
    return (
      <ConclueCadastro handleLogin={handleLogin}/>
    );
  }


  function getForms(step) {
    switch (step) {
      case 0:
        return personalDataForm()
      case 1:
        return locationDataForm();
      case 2: 
        return conclueCadastro();
      default:
        return null;
    }
  }

  function disableRoles () {
    if (activeStep === 0 && values.password.length > 0 && (values.login.length > 0 && values.password === values.confPassword)) {
      return true
    }
    if (activeStep === 1 && localValues.cep.length > 0) {
      return true
    }
    return false
  }

  const isDisable = disableRoles()

  return (
    <CadastroContainer>
        <CadastroContainerStyle >
            <FormContainer>
                <FormTitle>
                    Cadastro
                </FormTitle>
                {getForms(activeStep)}
            </FormContainer>
            <MobileStepper
                variant="progress"
                steps={3}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 2 || !isDisable}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                }
            />
        </CadastroContainerStyle>
    </CadastroContainer>
  );
}