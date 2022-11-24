import React from 'react'
import { Button, AppBar, Box, CssBaseline, Paper, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import ArchiveIcon from '@mui/icons-material/Archive';
import { userSchema } from '../Validations/UserValidation';
import { Formik, Field, Form } from 'formik';


const BottomNav = ({nextStep, prevStep, handleChange, values}) => {
  const createUser = async () => {
    
    let formData = {
      email: values.email,
      phone: values.phone
    }
    const isValid = await userSchema.isValid(formData);
    console.log(typeof isValid);
    return isValid;
  }
  const Continue = async (e) => {
    e.preventDefault();
    const isValid = await createUser();
    console.log(typeof isValid)
    if(isValid == true) {nextStep()}
    
  } 
  
 
  return (
 
    
    <AppBar className = "button" position="fixed"  style={{top: "auto", bottom: 0}} align-items="right">
    <Formik
    initialValues={{
      phone: '',
      
      email: '',
    }}
    onClick={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
     <Button className = "button" variant="contained" onClick= {Continue} style={{  backgroundColor: 'aqua' , width: "150px", bottom: 0, right: 0}}>NEXT</Button>
     </Formik>
        </AppBar>
  )
}

export default BottomNav