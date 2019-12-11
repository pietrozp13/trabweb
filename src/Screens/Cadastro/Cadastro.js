import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import PersonalForm from './PersonalForm/PersonalForm'

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
    // idade: '',
    sexo: 'F'
  });

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChange = (prop, newValue) => {
    setValues({ ...values, [prop]: newValue });
  };

  function personalDataForm () {
    return (
        <PersonalForm values={values} handleChange={handleChange}/>
    )
  }
  console.log(values)
  return (
    <CadastroContainer>
        <CadastroContainerStyle >
            <FormContainer>
                <FormTitle>
                    Cadastro
                </FormTitle>
                {personalDataForm()}
            </FormContainer>
            <MobileStepper
                variant="progress"
                steps={3}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
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