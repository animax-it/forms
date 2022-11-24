import React from 'react'
import { Button, AppBar, Grid } from '@material-ui/core'

import { userSchema, amtSchema, decSchema } from '../Validations/UserValidation';
import { Formik } from 'formik';


const BottomNav = ({nextStep, step, values}) => {

  const createUser = async () => {
    var isValid = false;
    var formData = {}
    switch(step) {
      case 1: 
       formData = {
          email: values.email,
          phone: values.phone,
          addressOne : values.addressOne,
          addressTwo : values.addressTwo,
          pincode : values.pincode,
          state : values.state,
          planType : values.planType
      }
        isValid = await userSchema.isValid(formData);
        break;

      case 2: 
         formData = {
          amount : values.amount
        }
       isValid = await amtSchema.isValid(formData);
       break;

       case 3: 
         formData = {
          declarationOne : values.declarationOne,
          declarationTwo : values.declarationTwo,
          declarationThree : values.declarationThree,
          declarationFour : values.declarationFour,
        }
       isValid = await decSchema.isValid(formData);
       break;

       default: 
       isValid = true
    }
    return isValid;
    
      
       }
    
  
  
  const Continue = async (e) => {
   
    e.preventDefault()
    const isValid = await createUser();
    console.log( isValid)
    if(isValid === true) {nextStep()}
    else {
      alert('Please enter all the details correctly, one or more of the fields are missing or invalid.')
    }
    
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
          
        <Button className='button' variant="contained" onClick= {Continue} style={{   backgroundColor: 'aqua' ,height: "50px", width: "150px"}}>{step === 4 ? "SUBMIT" : "NEXT"}</Button>
     
      </Grid>
    </Grid>
       
     
     </Formik>
     </AppBar>
        
  )
}

export default BottomNav

