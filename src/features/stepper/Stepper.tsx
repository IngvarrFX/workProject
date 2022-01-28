import React from "react";
import styles from "./Stepper.module.css"


type StepperPropsType = {
    step: number
}


export const Stepper: React.FC<StepperPropsType> = ({step}) => {
    return <div className={styles.stepper}>
        <div className={styles.stepperStep}>
            <div className={styles.stepperIndicator}>
                <span style={{backgroundColor: step === 1 ? "#EE950F" : ""}} className={styles.stepperInfo}>1</span>
                <span style={{backgroundColor: step === 2 ? "#EE950F" : ""}} className={styles.stepperInfo}>2</span>
                <span style={{backgroundColor: step === 3 ? "#EE950F" : ""}} className={styles.stepperInfo}>3</span>
            </div>
        </div>
    </div>
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

/*export const HorizontalStepper:React.FC<HorizontalStepperPropsType> = ({step}) => {
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
}*/
