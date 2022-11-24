import React from 'react'
import BottomNav from './BottomNav'
import { ChevronLeft } from '@mui/icons-material'
import { Container, Grid, FormGroup, Checkbox, FormControlLabel, TextField, Typography, Accordion,FormControl,InputLabel, Select, MenuItem, AccordionSummary, AccordionDetails } from '@material-ui/core'
const Declaration = ({nextStep, prevStep, handleChange, values}) => {
  return (
    <div>
    <Container component = 'main' >
      <Grid container spacing = {2}>
      <Grid item xs={1} sm={1}>
      <ChevronLeft onClick= {prevStep}/>
      </Grid>
        <Grid item xs={11} sm={11}>
          <Typography variant="h4" gutterBottom align="left" style={{ fontWeight: 600 }} >
            Declaration
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange('declarationOne')} color="primary" default />} label={<div align='left'>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</div>} />
            <FormControlLabel control={<Checkbox onChange={handleChange('declarationTwo')} color="primary" default />} label={<div align='left'>I hereby declare that all proposed members are in good healthand entirely free from any mental pf physical impairements ordeformities, disease/condition.</div>} />
            <FormControlLabel control={<Checkbox onChange={handleChange('declarationThree')} color="primary" default />} label={<div align='left'>I have understood that there is 30 days waiting period for alldiseases and 2 years on named ailments. (list of named ailements)</div> }/>
            <FormControlLabel control={<Checkbox onChange={handleChange('declarationFour')} color="primary" default />} label={<div align='left'>I understand that this policy doesn't cover Pre-existing diseases.</div>}/>
            
            </FormGroup>


      </Grid>
      </Grid>

    </Container>
    <BottomNav
       nextStep = {nextStep}
       prevStep = {prevStep}/>

    </div>
  )
}

export default Declaration