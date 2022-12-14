import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';


const steps = ['Choose your plan', 'Chose amount', 'Declaration','Review', 'Success'];

export default function HorizontalNonLinearStepper({step}) {

  return (
    <Box sx={{ width: '100%' ,pb: 5 }}>
      <Stepper nonLinear activeStep={step-1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepButton color="inherit">
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        { (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>            
              <Box sx={{ flex: '1 1 auto' }} />             
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}