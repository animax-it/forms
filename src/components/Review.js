import React from 'react'
import BottomNav from './BottomNav'
import { ChevronLeft } from '@mui/icons-material'
import { Container, Grid, FormGroup, Checkbox, FormControlLabel, TextField, Typography, Accordion,FormControl,InputLabel, Select, MenuItem, AccordionSummary, AccordionDetails } from '@material-ui/core'
const Review = ({nextStep, prevStep, handleChange, values}) => {
  const getPlanType = (planType) => {
    switch(planType) {
      case 'One':
        return 'Individual'
      case 'Pro':
        return 'Individual'
      case 'Plus':
        return 'Individual  + Individual'
      case 'Max':
        return 'Floater'
      case 'Grand':
        return 'Floater + Individual'
    }
  }
  return (
    <Container component = 'main' >
      <Grid container spacing = {2}>
        
      <Grid item xs={1} sm={1}>
      <ChevronLeft onClick= {prevStep}/>
      </Grid>
          <Grid item xs={11} sm={11} >
          <Typography variant="h4" gutterBottom align="left" style={{ fontWeight: 600 }} >
            Review and confirm payment
          </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container spacing = {3}>
            <Grid item xs={4} sm={4}><Typography>Plan Selected</Typography></Grid>
            <Grid item xs={8} sm={8}><Typography align='left'>{values.planType}</Typography></Grid>
            <Grid item xs={4} sm={4}><Typography>Plan Type</Typography></Grid>
            <Grid item xs={8} sm={8}><Typography align='left'>{getPlanType(values.planType)}</Typography></Grid>
            <Grid item xs={4} sm={4}><Typography>Deductible Amount</Typography></Grid>
            <Grid item xs={8} sm={8}><Typography align='left'>Rs. {values.amount/20}L</Typography></Grid>
            <Grid item xs={4} sm={4}><Typography>GST(18%)</Typography></Grid>
            <Grid item xs={8} sm={8}><Typography align='left'>Rs. {(values.amount/20)*18000}</Typography></Grid>
            <Grid item xs={4} sm={4}><Typography>Premium</Typography></Grid>
            <Grid item xs={8} sm={8}><Typography align='left'>Rs. {(values.amount/20)*1.18}L</Typography></Grid>
            </Grid>
          

          


      </Grid>
      </Grid>
      <BottomNav
       nextStep = {nextStep}
       prevStep = {prevStep}/>
    </Container>
  )
}

export default Review