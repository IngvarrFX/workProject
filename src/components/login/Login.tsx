import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ModalWindow} from "../modal/Modal";
import {useDispatch} from "react-redux";
import {setAuth} from "../../store/actions/setAuth";
import styles from "./Login.module.css"
import logo from "../../assets/logo.svg"
import track from "../../assets/track 1.svg"
import container from "../../common/style/Conteiner.module.css"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isOpenLogin, setIsOpenLogin] = useState(false)
    const [isOpenSingUp, setIsOpenSingUp] = useState(false)

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const loginHandle = (email: string, password: string) => {
        const login = localStorage.getItem(email) === password;
        if (login) {
            dispatch(setAuth())
            navigate("/main");
        } else {
            alert("You are not authorized")
        }
    }
    const singUpHandle = (email: string, password: string) => {
        localStorage.setItem(email, password)
        setIsOpenSingUp(false)
    }

    const handleScroll = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.trackBg}>
                <img src={track} alt="track"/>
            </div>
            <div className={container.container}>
                <div className={styles.header}>
                    <div className={styles.leftPartHeader}>
                        <img src={logo} alt="logo"/>

                        <div className={styles.links}>
                            <Link to="/home">Home</Link>
                            <Link to="/service">Service</Link>
                            <Link to="/clients">Clients</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className={styles.login}>
                        <ModalWindow title={"Log in"}
                                     titleModal={"Log in"}
                                     onClick={loginHandle}
                                     message={"No account?"}
                                     setEmail={(email) => setEmail(email)}
                                     setPassword={(password) => setPassword(password)}
                                     setIsOpen={(value) => setIsOpenLogin(value)}
                                     setIsOpenModal={() => setIsOpenSingUp(true)}
                                     isOpen={isOpenLogin}
                                     link={"Create one"}
                                     linkTitle={"Create one"}
                        >
                        </ModalWindow>
                        <ModalWindow title={"Sing up"}
                                     titleModal={"Sing up"}
                                     onClick={singUpHandle}
                                     message={"Already have an account?"}
                                     setEmail={(email) => setEmail(email)}
                                     setPassword={(password) => setPassword(password)}
                                     setIsOpen={(value) => setIsOpenSingUp(value)}
                                     isOpen={isOpenSingUp}
                                     setIsOpenModal={() => setIsOpenLogin(true)}
                                     linkTitle={"Log in"}
                        >
                        </ModalWindow>
                    </div>
                </div>
                <div className={styles.textBlock}>
                    <p className={styles.motto}>We will deliver your cargo exactly on time</p>
                    <p className={styles.text}>For us, goods are our most valuable assets.
                        So that with certainty we can provide the best service for your goods </p>
                </div>
                <div>
                    <button className={styles.startButton}>Get Started</button>
                </div>
                <div className={styles.scroll}>
                    <button className={styles.scrollButton} >Scroll down</button>
                </div>
            </div>
        </div>
    );
};
