import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {HorizontalStepper} from "../../../features/Stepper";
import {RowRadioButtonsGroup} from "../../../features/RadioButton";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



type AddProductModalPropsType = {
    isShow: boolean
    setIsShow: ()=> void
    children: React.ReactNode
    nextStep: ()=> void
    step:number
}

export const AddProductModal:React.FC<AddProductModalPropsType> = ({isShow,setIsShow, children,nextStep, step}) => {

    return (
        <div>
            <Modal
                open={isShow}
                onClose={setIsShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <HorizontalStepper step={step}/>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{display:"flex", flexDirection:"column", width: 300}}>
                        {children}
                    </Typography>
                    <RowRadioButtonsGroup/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <button onClick={nextStep}>Next step</button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
