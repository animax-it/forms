import { Container, Grid, TextField, Typography, Accordion,FormControl,InputLabel, Select, MenuItem, BottomNavigation, BottomNavigationAction, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox } from '@material-ui/core'
import React from 'react'
import { userSchema } from '../Validations/UserValidation';
import* as yup from "yup";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { SvgIcon } from '@material-ui/core';
import BottomNav from './BottomNav'
import FormPreview from './FormPreview';
import NavBar from './NavBar'
import '../App.css'

const Plan = ({nextStep, handleChange, step, values}) => {
  
  return (
    
    <Container className = "planHead" component = 'main' style={{    width: "100vw"
    }} >
      <NavBar
       nextStep = {nextStep}
       values = {values}
       step = {step} 
       />
      
       <Grid container spacing = {2} >
       <Grid item xs={12} sm={8}>
       <Grid item xs={12} sm={12}>
       <Typography  variant="h4" gutterBottom align="left" style={{ fontWeight: 600 }}>
        Choose your plan
      </Typography>
      <Typography inline variant="body1" align="left" >
        Hi Animesh, 
      </Typography>
      <Typography inline variant="body1" align="left" >
        Increase yours and your family health cover insurance cover by Rs 20 lakhs with
      </Typography>
      <Typography inline variant="body1" align="left" >
        Super top-up!
      </Typography>
       </Grid>
      <Grid  item xs={12} sm={12}>
      <form>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Plan details</Typography>

        </AccordionSummary>
        <Divider/>

        <AccordionDetails>
          
          <FormControl fullWidth>
          <InputLabel  variant="standard" id="demo-simple-select-label">Select your plan</InputLabel>
          <Select
            defaultValue='30'
            labelId="planType"
            id="planType"
            value={values.planType}
            label="planType"
            onChange={handleChange('planType')}
          >
            <MenuItem value='One'>
              <Grid container>
                <Grid item xs={12} sm={12} >
                  <Typography>One (Individual)</Typography>
                </Grid>
                <Grid item xs={1} sm={1}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15H9C5.6865 15 3 17.6865 3 21V22C3 22 6.125 23 12 23C17.875 23 21 22 21 22V21C21 17.6865 18.3135 15 15 15Z" fill="#B3E9DD" stroke="#2D3D54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6C7 3.2385 9.2385 1 12 1C14.7615 1 17 3.2385 17 6C17 8.7615 14.7615 12 12 12C9.2385 12 7 8.7615 7 6Z" fill="#F9C6B1" stroke="#2D3D54" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 10.0879C13.4201 10.0879 14.5713 9.02521 14.5713 7.71429H9.42847C9.42847 9.02521 10.5797 10.0879 11.9999 10.0879Z" fill="#2D3D54"/>
</SvgIcon>
                </Grid>
                <Grid item xs={7} sm={7}>
                <Typography align='left'>Self</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                <Typography align='right'>Rs 0000</Typography>
                </Grid>
              </Grid></MenuItem>
             
              <Divider />
              <MenuItem value='Pro'>
              <Grid container>
                <Grid item xs={12} sm={12} >
                  <Typography>Pro (Individual)</Typography>
                </Grid>
                <Grid item xs={1} sm={1}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3966_55953)">
<path d="M13 21.247C13 20.433 12.5115 19.697 11.756 19.3945C10.716 18.9785 9.0705 18.5 7 18.5C4.9295 18.5 3.284 18.9785 2.244 19.3945C1.4885 19.697 1 20.4335 1 21.247V23H13V21.247Z" fill="#B3E9DD" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" fill="#F9C6B1"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.5C3 9.291 4.791 7.5 7 7.5C9.209 7.5 11 9.291 11 11.5C11 13.709 9.209 16 7 16C4.791 16 3 13.709 3 11.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99993 14.5714C7.94671 14.5714 8.71422 13.8039 8.71422 12.8571H5.28564C5.28564 13.8039 6.05316 14.5714 6.99993 14.5714Z" fill="#2D3D54"/>
<path d="M12 5.5C12 3.0145 14.0145 1 16.5 1C18.9855 1 21 3.0145 21 5.5C21 7.9855 18.9855 11 16.5 11C14.0145 11 12 7.9855 12 5.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 9.42854C17.6835 9.42854 18.6429 8.27728 18.6429 6.85712H14.3572C14.3572 8.27728 15.3166 9.42854 16.5 9.42854Z" fill="#2D3D54"/>
</g>
<defs>
<clipPath id="clip0_3966_55953">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</SvgIcon>
                </Grid>
                <Grid item xs={7} sm={7}>
                <Typography align='left'>Parents</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                <Typography align='right'>Rs 0000</Typography>
                </Grid>
              </Grid></MenuItem>

              <Divider />
              <MenuItem value='Plus'>
              <Grid container>
                <Grid item xs={12} sm={12} >
                  <Typography>Plus (Individual + Individual)</Typography>
                </Grid>
                <Grid item xs={1} sm={1}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3966_55953)">
<path d="M13 21.247C13 20.433 12.5115 19.697 11.756 19.3945C10.716 18.9785 9.0705 18.5 7 18.5C4.9295 18.5 3.284 18.9785 2.244 19.3945C1.4885 19.697 1 20.4335 1 21.247V23H13V21.247Z" fill="#B3E9DD" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" fill="#F9C6B1"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.5C3 9.291 4.791 7.5 7 7.5C9.209 7.5 11 9.291 11 11.5C11 13.709 9.209 16 7 16C4.791 16 3 13.709 3 11.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99993 14.5714C7.94671 14.5714 8.71422 13.8039 8.71422 12.8571H5.28564C5.28564 13.8039 6.05316 14.5714 6.99993 14.5714Z" fill="#2D3D54"/>
<path d="M12 5.5C12 3.0145 14.0145 1 16.5 1C18.9855 1 21 3.0145 21 5.5C21 7.9855 18.9855 11 16.5 11C14.0145 11 12 7.9855 12 5.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 9.42854C17.6835 9.42854 18.6429 8.27728 18.6429 6.85712H14.3572C14.3572 8.27728 15.3166 9.42854 16.5 9.42854Z" fill="#2D3D54"/>
</g>
<defs>
<clipPath id="clip0_3966_55953">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</SvgIcon>
                </Grid>
                <Grid item xs={7} sm={7}>
                <Typography align='left'>Parents</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                <Typography align='right'>Rs 0000</Typography>
                </Grid>
              </Grid></MenuItem>
              
              <Divider />
              <MenuItem value='Max'>
              <Grid container>
                <Grid item xs={12} sm={12} >
                  <Typography>Max (Floater)</Typography>
                </Grid>
                <Grid item xs={1} sm={1}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3966_55953)">
<path d="M13 21.247C13 20.433 12.5115 19.697 11.756 19.3945C10.716 18.9785 9.0705 18.5 7 18.5C4.9295 18.5 3.284 18.9785 2.244 19.3945C1.4885 19.697 1 20.4335 1 21.247V23H13V21.247Z" fill="#B3E9DD" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" fill="#F9C6B1"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.5C3 9.291 4.791 7.5 7 7.5C9.209 7.5 11 9.291 11 11.5C11 13.709 9.209 16 7 16C4.791 16 3 13.709 3 11.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99993 14.5714C7.94671 14.5714 8.71422 13.8039 8.71422 12.8571H5.28564C5.28564 13.8039 6.05316 14.5714 6.99993 14.5714Z" fill="#2D3D54"/>
<path d="M12 5.5C12 3.0145 14.0145 1 16.5 1C18.9855 1 21 3.0145 21 5.5C21 7.9855 18.9855 11 16.5 11C14.0145 11 12 7.9855 12 5.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 9.42854C17.6835 9.42854 18.6429 8.27728 18.6429 6.85712H14.3572C14.3572 8.27728 15.3166 9.42854 16.5 9.42854Z" fill="#2D3D54"/>
</g>
<defs>
<clipPath id="clip0_3966_55953">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</SvgIcon>
                </Grid>
                <Grid item xs={7} sm={7}>
                <Typography align='left'>Self + Spouse + Kids</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                <Typography align='right'>Rs 0000</Typography>
                </Grid>
              </Grid></MenuItem>
             
              <Divider />
              <MenuItem value='Grand'>
              <Grid container>
                <Grid item xs={12} sm={12} >
                  <Typography>Grand (Floater + Individual)</Typography>
                </Grid>
                <Grid item xs={1} sm={1}>
                <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3966_55953)">
<path d="M13 21.247C13 20.433 12.5115 19.697 11.756 19.3945C10.716 18.9785 9.0705 18.5 7 18.5C4.9295 18.5 3.284 18.9785 2.244 19.3945C1.4885 19.697 1 20.4335 1 21.247V23H13V21.247Z" fill="#B3E9DD" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" fill="#F9C6B1"/>
<path d="M13 13.984C13.9525 13.699 15.1135 13.5 16.5 13.5C18.993 13.5 20.629 14.143 21.6365 14.7765C22.496 15.3175 23 16.2765 23 17.292V23H16.5" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.5C3 9.291 4.791 7.5 7 7.5C9.209 7.5 11 9.291 11 11.5C11 13.709 9.209 16 7 16C4.791 16 3 13.709 3 11.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99993 14.5714C7.94671 14.5714 8.71422 13.8039 8.71422 12.8571H5.28564C5.28564 13.8039 6.05316 14.5714 6.99993 14.5714Z" fill="#2D3D54"/>
<path d="M12 5.5C12 3.0145 14.0145 1 16.5 1C18.9855 1 21 3.0145 21 5.5C21 7.9855 18.9855 11 16.5 11C14.0145 11 12 7.9855 12 5.5Z" fill="#FFDE9E" stroke="#203248" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 9.42854C17.6835 9.42854 18.6429 8.27728 18.6429 6.85712H14.3572C14.3572 8.27728 15.3166 9.42854 16.5 9.42854Z" fill="#2D3D54"/>
</g>
<defs>
<clipPath id="clip0_3966_55953">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</SvgIcon>
                </Grid>
                <Grid item xs={7} sm={7}>
                <Typography align='left'>Self + Spouse + Kids + Parents</Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                <Typography align='right'>Rs 0000</Typography>
                </Grid>
              </Grid></MenuItem>

          </Select>
        </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Basic details (required)</Typography>
        </AccordionSummary>
        <Divider/>

        <AccordionDetails>
        <React.Fragment>
    
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
        required
        id="email"
        value={values.email}
        label="Personal email address"
        onChange={handleChange('email')}
        placeholder='Enter'
        variant='outlined'
      />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            value={values.phone}
            label="Mobile number"
            onChange={handleChange('phone')}
            placeholder='Enter'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="addressOne"
            value={values.addressOne}
            label="Address line 01"
            onChange={handleChange('addressOne')}
            placeholder='Enter'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="addressTwo"
            value={values.addressTwo}
            label="Address line 02"
            onChange={handleChange('addressTwo')}
            placeholder='Enter'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pincode"
            value={values.pincode}
            label="Pincode"
            onChange={handleChange('pincode')}
            placeholder='Enter'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            value={values.state}
            label="State"
            onChange={handleChange('state')}
            placeholder='Enter'
            variant='outlined'
          />
        </Grid>
     
      </Grid>
    </React.Fragment>
        </AccordionDetails>
      </Accordion>
         
        </form>
      </Grid>
        </Grid> 
    <Grid item xs={12} sm={4}>
          <FormPreview 
          values = {values}/>
    </Grid>
    <BottomNav
       nextStep = {nextStep}
       values = {values}
       step = {step}
       />
    
    </Grid>
       
    </Container>
  )
}

export default Plan