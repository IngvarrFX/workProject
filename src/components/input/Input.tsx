import React from "react";
import styles from "./Input.module.css"


type InputPropsType = {
    setValue: (value: string) => void
    placeholder?: string
    value: string
    label: string
}

export const Input: React.FC<InputPropsType> = ({setValue, placeholder, value,label}) => {

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <div>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} value={value} onChange={onChangeHandle} placeholder={placeholder}/>
        </div>
    );
};

