import React from 'react' 
import { Container, Grid, Typography, Divider} from '@material-ui/core'
import Box from '@mui/material/Box';


const FormPreview = ({values}) => {
  return (
    <Box sx={{
      boxShadow: 1,
      
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        p: 1,
        m: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
    }}>

    <Container component = 'main' >
      <Typography variant="h6" gutterBottom  style={{ fontWeight: 600 }}>Form Preview</Typography>
      <Divider/>
      <Grid container spacing = {2}>
            <Grid item xs={12} sm={12}><Typography>Personal email address: {values.email}</Typography></Grid>
            <Grid item xs={12} sm={12}><Typography>Mobile number: {values.phone}</Typography></Grid>
            <Grid item xs={12} sm={12}><Typography>Address line 01: {values.addressOne}</Typography></Grid>
            <Grid item xs={12} sm={12}><Typography>Address line 02: {values.addressTwo}</Typography></Grid>
            <Grid item xs={12} sm={12}><Typography >Pincode: {values.pincode}</Typography></Grid>
            <Grid item xs={12} sm={12}><Typography >State: {values.state}</Typography></Grid>
            </Grid>
            </Container>
            </Box>
  )
}

export default FormPreview