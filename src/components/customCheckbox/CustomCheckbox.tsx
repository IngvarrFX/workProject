import React from "react";
import styles from "./CustomCheckbox.module.css"


type CustomCheckboxPropsType = {
    onChangeChecked: (value: boolean) => void
    lable?: string
}

export const CustomCheckbox: React.FC<CustomCheckboxPropsType> = ({onChangeChecked, lable}) => {
    return (
        <div>
            <label className={styles.checkOption}>
                <input className={styles.checkInput}
                       onChange={(e) => onChangeChecked(e.currentTarget.checked)} type="checkbox"/>
                <span className={styles.checkbox}></span>
                {lable}
            </label>
        </div>
    );
};

