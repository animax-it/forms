import React from 'react'
import BottomNav from './BottomNav'
import { ChevronLeft } from '@mui/icons-material'
import NavBar from './NavBar'
import { Container, Grid, FormGroup, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
const Declaration = ({nextStep, prevStep, handleChecked,step, values}) => {
  
  return (
    <div>
    <Container className = "marginAndPadding" component = 'main' >
    <NavBar
       nextStep = {nextStep}
       values = {values}
       step = {step} 
       />
      <Grid container spacing = {2}>
      <Grid item xs={1} sm={1}>
      <ChevronLeft fontSize="large"  onClick= {prevStep}/>
      </Grid>
        <Grid item xs={11} sm={11}>
          <Typography variant="h4" gutterBottom align="left" style={{ fontWeight: 600 }} >
            Declaration
          </Typography>
          <FormGroup >
            <FormControlLabel control={<Checkbox onChange={handleChecked('declarationOne')} color="primary" default />} label={<div align='left'>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</div>} />
            <FormControlLabel control={<Checkbox onChange={handleChecked('declarationTwo')} color="primary" default />} label={<div align='left'>I hereby declare that all proposed members are in good healthand entirely free from any mental pf physical impairements ordeformities, disease/condition.</div>} />
            <FormControlLabel control={<Checkbox onChange={handleChecked('declarationThree')} color="primary" default />} label={<div align='left'>I have understood that there is 30 days waiting period for alldiseases and 2 years on named ailments. (list of named ailements)</div> }/>
            <FormControlLabel control={<Checkbox onChange={handleChecked('declarationFour')} color="primary" default />} label={<div align='left'>I understand that this policy doesn't cover Pre-existing diseases.</div>}/>           
          </FormGroup>
      </Grid>
      </Grid>
    </Container>
    <BottomNav
       nextStep = {nextStep}
       prevStep = {prevStep}
       values = {values}
       step = {step}
       />
    </div>
  )
}

export default Declaration