import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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


type SuccsessModalType = {
    isOpen: boolean
    toggleMode: () => void
    children:React.ReactNode
}

export const SuccsessModal: React.FC<SuccsessModalType> = ({isOpen,toggleMode, children}) => {

    const handleClose = () => toggleMode;

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
