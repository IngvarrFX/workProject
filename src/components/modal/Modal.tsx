import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.css"
import {useFormik} from "formik";
import {FormLabel, TextField} from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    minHeight: 600,
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    borderRadius: "3px",
    display: "flex",
    flexDirection: "column",
};

type ModalWindowType = {
    title: string
    titleModal: string
    onClick: (email: string, password: string) => void
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    message: string
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    link?: string
    linkTitle: string
    setIsOpenModal: () => void
}

type FormikErrorType = {
    email?: string
    password?: string
};

export const ModalWindow: React.FC<ModalWindowType> = ({
                                                           title,
                                                           titleModal,
                                                           onClick,
                                                           setEmail,
                                                           setPassword,
                                                           message,
                                                           isOpen,
                                                           setIsOpen,
                                                           setIsOpenModal,
                                                           linkTitle,
                                                       }) => {
    //const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);


    const loginHandle = () => {
        //setOpen(false)
        onClick(formik.values.email, formik.values.password)
    }


    const callModal = () => {
        setIsOpenModal()
        setIsOpen(false)
    }


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "required fill";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "password must have"
            } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
                errors.password = "Invalid password"
            }
            return errors;
        },
        onSubmit: values => {
            setEmail(values.email)
            setPassword(values.password)
        }
    });

    const styleButton = {
        backgroundColor: title === "Log in" ? "transparent" : "#EE950F",
        color: title === "Log in" ? "#EE950F" : "#FFFFFF",
        border: "none",
        width: 115,
        height: 46,
        borderRadius: 3,
        cursor: "pointer",
        fontWeight: 600,
        fontSize: 14,
    }

    const styleEmailInput = {
        border: formik.errors.email ? "1px solid red" : "1px solid #E6E8EA",
        borderRadius: 1,
    }

    const stylePasswordInput = {
        border: formik.errors.password ? "1px solid red" : "1px solid #E6E8EA",
        borderRadius: 1,
    }


    return (
        <div className={styles.modalBlock}>
            <button style={styleButton} onClick={() => setIsOpen(true)}>{title}</button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormLabel style={{
                        fontSize: "36px",
                        textAlign: "center",
                        color: "#2B3844",
                        fontWeight: "bold",
                        marginTop: 70,
                        marginBottom: 54
                    }}>
                        {titleModal}
                    </FormLabel>

                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <div className={styles.email}>
                            <label>Email</label>
                            <TextField placeholder={"Enter a email"}
                                       margin="normal"
                                       {...formik.getFieldProps("email")}
                                       value={formik.values.email}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       className={styles.field}
                                       sx={styleEmailInput}
                            />
                            {/*formik.touched.password && formik.errors.password ? styles.error :*/}
                        </div>
                        <div className={styles.password}>
                            <label>Password</label>
                            <TextField type="password"
                                       placeholder={"Enter password"}
                                       margin="normal"
                                       {...formik.getFieldProps("password")}
                                       value={formik.values.password}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       className={styles.field}
                                       sx={stylePasswordInput}
                            />
                        </div>

                        <button className={styles.submit} disabled={!!formik.errors.email || !!formik.errors.password}
                                type="submit"
                                onClick={loginHandle}>{title}</button>
                        <div className={styles.message}>
                            <span>{message}</span>
                            <button className={styles.buttonLink} onClick={callModal}>{linkTitle}</button>
                        </div>
                    </form>

                </Box>
            </Modal>
        </div>
    );
}
