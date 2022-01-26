import React from "react";
import styles from "./Title.module.css"

type TitlePropsType = {
    title: string
}

export const Title:React.FC<TitlePropsType> = ({title}) => {
    return (
        <div className={styles.title}>
            {title}
        </div>
    );
};

