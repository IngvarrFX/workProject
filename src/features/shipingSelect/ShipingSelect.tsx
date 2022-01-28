import React from "react";
import styles from "./ShipingSelect.module.css"
import {ShipmentMethodType} from "../../data";


type RadioSelectProsType = {
    onChange: (value: ShipmentMethodType) => void
}

export const ShipingSelect: React.FC<RadioSelectProsType> = ({onChange}) => {

    const [air, setAir] = React.useState(true);
    const [sea, setSea] = React.useState(false);
    const [car, setCar] = React.useState(false);


    const handleRadioChange = (value: string) => {
        if (value === "AIR") {
            setAir(true)
            setSea(false)
            setCar(false)
            onChange(value)
        }
        if (value === "SEA") {
            setAir(false)
            setSea(true)
            setCar(false)
            onChange(value)
        }
        if (value === "TRUCK") {
            setAir(false)
            setSea(false)
            setCar(true)
            onChange(value)
        }

    };


    return (
        <div>
            <div className={styles.title}>Select delivery method</div>
            <div style={{background: air ? "#FEF5E7" : "",}} className={styles.shipMethod}
                 onClick={() => handleRadioChange("AIR")}>
                <label style={{color: air ? "#EE950F" : ""}} className={styles.air}>{"By air transport"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={air} readOnly/>
                <span className={styles.checkbox}></span>
            </div>
            <div style={{background: sea ? "#FEF5E7" : "",}}  className={styles.shipMethod} onClick={() => handleRadioChange("SEA")}>
                <label style={{color: sea ? "#EE950F" : ""}}  className={styles.ship}>{"By sea"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={sea} readOnly/>
                <span className={styles.checkbox}></span>
            </div>
            <div  style={{background: car ? "#FEF5E7" : "",}}  className={styles.shipMethod} onClick={() => handleRadioChange("TRUCK")}>
                <label style={{color: car ? "#EE950F" : ""}}  className={styles.truck}>{"By car"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={car} readOnly/>
                <span className={styles.checkbox}></span>
            </div>

        </div>
    );
};

