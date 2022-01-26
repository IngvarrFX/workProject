import React from "react";
import styles from "./Footer.module.css"


type FooterPropsType = {
    count: number
    moveItem: () => void
    deleteItem: () => void

}

export const Footer: React.FC<FooterPropsType> = ({count, deleteItem, moveItem}) => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.countSelect}>
                Selected: {count}
            </div>
            <div className={styles.btn}>
                <button onClick={deleteItem} className={styles.deleteBtn}>Delete</button>
                <button onClick={moveItem} className={styles.moveBtn}>Move</button>
            </div>
        </div>
    );
};

