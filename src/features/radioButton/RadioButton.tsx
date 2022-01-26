import React from "react";
import styles from "./RadioButton.module.css"


type RadioButtonPropsType = {
    onChange: (value: "A" | "S" | "D" | "F") => void
}

export const RadioButton: React.FC<RadioButtonPropsType> = ({onChange}) => {

    const [A, setA] = React.useState(true);
    const [S, setS] = React.useState(false);
    const [D, setD] = React.useState(false);
    const [F, setF] = React.useState(false);


    const handleRadioChange = (value: string) => {
        if (value === "A") {
            setA(true)
            setS(false)
            setD(false)
            setF(false)
            onChange(value)
        }
        if (value === "S") {
            setA(false)
            setS(true)
            setD(false)
            setF(false)
            onChange(value)
        }
        if (value === "D") {
            setA(false)
            setS(false)
            setD(true)
            setF(false)
            onChange(value)
        }
        if (value === "F") {
            setA(false)
            setS(false)
            setD(false)
            setF(true)
            onChange(value)
        }
    };


    return (
        <div className={styles.block}>
            <label className={styles.labelRadio}>Purchasing technology</label>
            <div className={styles.radioBtn}>
                <div className={styles.radioBlock}>
                    <span className={A ? styles.active : ''}>A</span>
                    <input type="radio" checked={A} onChange={() => handleRadioChange("A")}/>
                </div>
                <div className={styles.radioBlock}>
                    <span>S</span>
                    <input type="radio" checked={S} onChange={() => handleRadioChange("S")}/>
                </div>
                <div className={styles.radioBlock}>
                    <span>D</span>
                    <input type="radio" checked={D} onChange={() => handleRadioChange("D")}/>
                </div>
                <div className={styles.radioBlock}>
                    <span>F</span>
                    <input type="radio" checked={F} onChange={() => handleRadioChange("F")}/>
                </div>
            </div>

        </div>

    );
};

/*export const RowRadioButtonsGroup = () => {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Purchasing technology</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="A"
                name="row-radio-buttons-group"
            >

                <div className={styles.radio}>
                   A
                    <input className={styles.radioBtn} type="radio" value="A" name="gender"/> S
                    <input className={styles.radioBtn} type="radio" value="S" name="gender"/> D
                    <input className={styles.radioBtn} type="radio" value="D" name="gender"/> F
                    <input className={styles.radioBtn} type="radio" value="F" name="gender"/>
                </div>
            </RadioGroup>
        </FormControl>
    );
}*/
