import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from "../../assets/logo.svg"



export const NavBar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <Link className={styles.home} to="/home">Home</Link>
            <Link className={styles.warehouses} to="/warehouses">Warehouses</Link>
            <Link className={styles.accounts} to="/accounts">Accounts</Link>
            <Link className={styles.cards} to="/cards">Cards</Link>
            <Link className={styles.contacts} to="/contacts">Contacts</Link>
            <Link className={styles.chat} to="/chat">Chat</Link>
        </div>
    );
};
