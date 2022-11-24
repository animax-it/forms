import React from 'react'
import { Container, Grid, Typography, FormControlLabel, Checkbox  } from '@material-ui/core'
import { SvgIcon } from '@material-ui/core'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ChevronLeft } from '@mui/icons-material';
import BottomNav from './BottomNav';
import FormPreview from './FormPreview';
import '../App.css'
import NavBar from './NavBar'

const Amount = ({nextStep,prevStep, handleChange, values, step}) => {
  const deductible = [
    {
      value: 20,
      label: '1L',
    },
    {
      value: 40,
      label: '2L',
    },
    {
      value: 60,
      label: '3L',
    },
    {
      value: 100,
      label: '5L',
    },
  ];
  
  function valuetext(value) {
    return `${value/20}L`;
  }
  
  return (
    <Container className = "marginAndPadding" component = 'main' >
       <NavBar
          nextStep = {nextStep}
          values = {values}
          step = {step} 
       />
      
       <Grid container spacing = {2} >
          <Grid item xs={12} sm={8}>
            <Grid container spacing = {2} >
                <Grid item xs={1} sm={1}>
                   <ChevronLeft fontSize="large" onClick= {prevStep}/>
                </Grid>
                <Grid item xs={11} sm={11}>
                    <Typography variant="h4" gutterBottom align="left" style={{ fontWeight: 600 }} >
                      Select your deductible amount
                    </Typography>
                    <Typography inline variant="body1" align="left" >
                      Select a deductible amount for the policy (or policies) below.
                    </Typography>
                    <Typography inline variant="body1" align="left" 
                    style={{ textDecoration: 'underline'}}>
                    (what is a deductible?)
                    </Typography>
                </Grid>
            </Grid>
            <Grid className = "marginLeftAndTop" container>
                <Grid  container>
                      <Grid item xs={12} sm={12} >
                        <Typography style={{ fontWeight: 700 }} align='left'>Self (Individual)</Typography>
                      </Grid>
                      <Grid item xs={1} sm={1}>
                        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 15H9C5.6865 15 3 17.6865 3 21V22C3 22 6.125 23 12 23C17.875 23 21 22 21 22V21C21 17.6865 18.3135 15 15 15Z" fill="#B3E9DD" stroke="#2D3D54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7 6C7 3.2385 9.2385 1 12 1C14.7615 1 17 3.2385 17 6C17 8.7615 14.7615 12 12 12C9.2385 12 7 8.7615 7 6Z" fill="#F9C6B1" stroke="#2D3D54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M11.9999 10.0879C13.4201 10.0879 14.5713 9.02521 14.5713 7.71429H9.42847C9.42847 9.02521 10.5797 10.0879 11.9999 10.0879Z" fill="#2D3D54"/>
                        </SvgIcon>
                      </Grid>
                      <Grid item xs={11} sm={11}>
                        <Typography  align='left'>Animesh Sharma</Typography>
                      </Grid>                      
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} >
                        <Typography align='left'>Sum insured of ₹20,00,000 with a deductible of ₹3,00,000
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <Box sx={{ width: 500 }}>
                          <Slider
                            aria-label="Custom marks"
                            defaultValue={values.amount}
                            getAriaValueText={valuetext}
                            step={10}
                            marks={deductible}
                            onChange = {handleChange('amount')}
                            className="slider"
                          />
                        </Box>
                    </Grid>
                <Grid item xs={12} sm={12}>
                      <FormControlLabel control={<Checkbox color="primary" default />} label={<div align='left'>I understand that this insurance will not be utilized until ₹3,00,000 (deductible) is exhausted.
                      </div>}/>
                </Grid>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormPreview 
              values = {values}/>
          </Grid>
       </Grid>
       <BottomNav
          nextStep = {nextStep}
          prevStep = {prevStep}
          values = {values}
          step = {step}/>
    </Container>
  )
}

export default Amount