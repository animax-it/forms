import React, { useEffect } from 'react'
import { Button, AppBar, Box, CssBaseline, Paper, BottomNavigation, BottomNavigationAction, Grid } from '@material-ui/core'
import ArchiveIcon from '@mui/icons-material/Archive';
import { userSchema } from '../Validations/UserValidation';
import { Formik, Field, Form } from 'formik';


const BottomNav = ({nextStep, prevStep, handleChange, step, values}) => {

  const createUser = async () => {
    switch(step) {
      case 1: 
        var formData = {
          email: values.email,
          phone: values.phone,
          addressOne : values.addressOne,
          addressTwo : values.addressTwo,
          pincode : values.pincode,
          state : values.state,
          planType : values.planType
      }
    }
    switch(step) {
      case 2: 
        var formData = {
          amount : ''
        }}
    const isValid = await userSchema.isValid(formData);
    console.log(typeof isValid);
    return isValid;
  }
  const Continue = async (e) => {
   
    e.preventDefault()
    const isValid = await createUser();
    console.log(typeof isValid)
    if(isValid == true) {nextStep()}
    
  } 
  
 
  return (
 
    
    <AppBar  style={{color: "black",top: "auto", bottom: 0, position: 'fixed'}} >
    <Formik
    initialValues={{
      phone: '',
      email: '',
      planType : '', 
      name : '',
      addressOne : '',
      addressTwo : '',
      pincode : '',
      state : '',
      amount : '',
      declarationOne : '',
      declarationTwo : '',
      declarationThree : '',
      declarationFour : ''
    }}
    onClick={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
       >
    <Grid container justifyContent="flex-end">
      <Grid item >
          
     <Button className='button' variant="contained" onClick= {Continue} style={{   backgroundColor: 'aqua' ,height: "50px", width: "150px"}}>NEXT</Button>
     
      </Grid>
    </Grid>
       
     
     </Formik>
     </AppBar>
        
  )
}

export default BottomNav

