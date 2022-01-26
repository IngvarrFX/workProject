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
            <div className={styles.shipMethod} onClick={() => handleRadioChange("AIR")}>
                <label className={styles.air}>{"By air transport"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={air}/>
                <span className={styles.checkbox}></span>
            </div>
            <div className={styles.shipMethod} onClick={() => handleRadioChange("SEA")}>
                <label className={styles.ship}>{"By sea"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={sea}/>
                <span className={styles.checkbox}></span>
            </div>
            <div className={styles.shipMethod} onClick={() => handleRadioChange("TRUCK")}>
                <label className={styles.truck}>{"By car"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={car}/>
                <span className={styles.checkbox}></span>
            </div>

        </div>
    );
};

