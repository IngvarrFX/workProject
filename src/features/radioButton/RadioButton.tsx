import React from "react";
import styles from "./RadioButton.module.css"


type RadioButtonPropsType = {
    onChange: (value: "A" | "S" | "D" | "F") => void
}

const buttons: ["A", "S", "D", "F"] = ["A", "S", "D", "F"]

export const RadioButton: React.FC<RadioButtonPropsType> = ({onChange}) => {

    const [a, setA] = React.useState(true);
    const [s, setS] = React.useState(false);
    const [d, setD] = React.useState(false);
    const [f, setF] = React.useState(false);


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


    /*return (
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

    );*/

    return (
        <div className={styles.buttons}>
            <div className={styles.buttonsBlock} onClick={() => handleRadioChange("A")}>
                <div style={{color: a ? "#3E4C59" : ""}} className={styles.title}>{"A"}</div>
                <input className={styles.check_input} type={"checkbox"} checked={a} readOnly/>
                <span className={styles.radio}></span>
            </div>
            <div className={styles.buttonsBlock} onClick={() => handleRadioChange("S")}>
                <div style={{color: s ? "#3E4C59" : ""}}  className={styles.title}>{"S"}</div>
                <input className={styles.check_input} type={"checkbox"} checked={s} readOnly/>
                <span className={styles.radio}></span>
            </div>
            <div className={styles.buttonsBlock} onClick={() => handleRadioChange("D")}>
                <div style={{color: d ? "#3E4C59" : ""}}  className={styles.title}>{"D"}</div>
                <input className={styles.check_input} type={"checkbox"} checked={d} readOnly/>
                <span className={styles.radio}></span>
            </div>
            <div className={styles.buttonsBlock} onClick={() => handleRadioChange("F")}>
                <div style={{color: f ? "#3E4C59" : ""}}  className={styles.title}>{"F"}</div>
                <input className={styles.check_input} type={"checkbox"} checked={f} readOnly/>
                <span className={styles.radio}></span>
            </div>
        </div>

    );

};





