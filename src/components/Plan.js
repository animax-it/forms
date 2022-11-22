import { Container, Grid, TextField, Typography, Accordion,FormControl,InputLabel, Select, MenuItem, AccordionSummary, AccordionDetails } from '@material-ui/core'
import React from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';


const Plan = ({nextStep, handleChange, values}) => {
  return (
    <Container component = 'main' >
       <Grid container spacing = {2} >
       
       <Grid item xs={12} sm={8}>
       <Grid item xs={12} sm={12}>
       <Typography variant="h4" gutterBottom align="left" >
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
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Plan details</Typography>
          
        </AccordionSummary>
        <Divider variant="inset" component="li" />
        <AccordionDetails>
          
          <FormControl fullWidth>
          <InputLabel  variant="standard" id="demo-simple-select-label">Select your plan</InputLabel>
          <Select
            defaultValue={30}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.planType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          <Grid container spacing = {1}>
          <Grid item xs={12} sm={1}>
          <Typography>Name :</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          </Grid>
        </form>
      </Grid>
        </Grid> 
    <Grid item xs={12} sm={4}>
          Form summary
    </Grid>
    </Grid>
    </Container>
  )
}

export default Plan