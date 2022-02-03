import React from "react";
import styles from "./Footer.module.css"


type FooterPropsType = {
    children:React.ReactNode
    value: boolean
}

export const Footer: React.FC<FooterPropsType> = ({children, value}) => {
    return (
        <div className={`${styles.footerWrapper} ${value && styles.active}`}>
            {children}
        </div>
    );
};

