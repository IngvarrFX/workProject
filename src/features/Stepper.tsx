import * as React from "react";
import Box from "@mui/material/Box";
//import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {Stepper} from "@mui/material";

const steps = [
    "1",
    "2",
    "3",
];

type HorizontalStepperPropsType = {
    step: number
}

/*type StepperPropsType = {
    steps: number[]
    activeStep: number
}


export const getSteppClass = (steps:number[], index:number, activeStep:number) => {
    if (activeStep > index + 1 || steps.length === activeStep) {
        return "is-complete";
    }

    if (activeStep === index + 1) {
        return "is-active";
    }
};

export const Stepper:React.FC<StepperPropsType> = ({ steps = [], activeStep = 1 })=> {
    const stepsList = steps.map((step, index) => {
        return (
            <li
                data-step={index + 1}
                className={getSteppClass(steps, index, activeStep)}
            >
                {step}
            </li>
        );
    });

    return <ol className="progress">{stepsList}</ol>;
}*/

export const HorizontalStepper:React.FC<HorizontalStepperPropsType> = ({step}) => {
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
