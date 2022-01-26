import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HorizontalStepper} from "../../../features/Stepper";
import styles from './AddProductModal.module.css'
import {Title} from "../../title/Title";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    minHeight: 600,
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px",
    p: 4,
};


type AddProductModalPropsType = {
    isShow: boolean
    setIsShow: () => void
    children: React.ReactNode
    nextStep: () => void
    step: number
    title: string
}

export const AddProductModal: React.FC<AddProductModalPropsType> = ({isShow, setIsShow, children, nextStep, step,title}) => {



    return (
        <div>
            <Modal
                open={isShow}
                onClose={setIsShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title title={title}/>
                    <HorizontalStepper step={step}/>
                 {/*   <Stepper activeStep={step} steps={[1,2,3]}/>*/}
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                style={{display: "flex", flexDirection: "column", width: 300}}>
                        {children}
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}
