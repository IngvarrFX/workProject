import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./AddWarehouseModal.module.css"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: "3px",
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    p: 4,
};



type AddWarehouseModalPropsType = {
    isShow: boolean
    setIsShow: ()=> void
    children: React.ReactNode
}

export const AddWarehouseModal:React.FC<AddWarehouseModalPropsType> = ({isShow,setIsShow, children}) => {

    return (
        <div>
            <Modal
                open={isShow}
                onClose={setIsShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className={styles.titleModal}>Adding a beer</h1>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{display:"flex", flexDirection:"column", width: 300}}>
                        {children}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
