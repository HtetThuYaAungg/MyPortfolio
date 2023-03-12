import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const StepList = ({activeStep,level1,level2,level3,level4}) => {

    const steps = [
        level1,
        level2,
        level3,
        level4,
      ];

  return (
    <div>
    <Box sx={{ width: '100%'  }}>
              <Stepper
                     nonLinear
                     
                     sx={{
                         color: 'red'   
                     }}
                  activeStep={activeStep} alternativeLabel>
   {steps.map((label) => (
     <Step key={label}>
       <StepLabel>{label}</StepLabel>
     </Step>
   ))}
 </Stepper>
</Box>
</div>
  )
}

export default StepList
