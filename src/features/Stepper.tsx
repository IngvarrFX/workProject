import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    '1',
    '2',
    '3',
];

type StepperPropsType = {
    step: number
}

export const HorizontalStepper:React.FC<StepperPropsType> = ({step}) => {
    return (
        <Box sx={{ width: '50%'}}>
            <Stepper activeStep={step} alternativeLabel  style={{color: "#EE950F"}}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
