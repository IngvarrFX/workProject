import React from "react";

import {ReactComponent as CheckedSVG} from "../../assets/checkedArrow.svg";

import styles from "./CustomCheckbox.module.css"


type CustomCheckboxPropsType = {
    onChangeChecked: (value: boolean, id?: string) => void
    value: boolean
}

export const CustomCheckbox: React.FC<CustomCheckboxPropsType> = ({onChangeChecked, value}) => {

    return (
        <div className={value ? styles.checked : styles.checkbox} onClick={() => onChangeChecked(!value)}>
            {value && <CheckedSVG/>}
        </div>
    );
};


/*[`checkbox ${value ? "checked": ""}`]*/
