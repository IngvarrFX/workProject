import React from "react";
import styles from "./PayingSelect.module.css"


type PayingSelectProsType = {
    onChange: (value: "card" | "paypal" | "cash") => void
}

export const PayingSelect: React.FC<PayingSelectProsType> = ({onChange}) => {

    const [card, setCard] = React.useState(true);
    const [paypal, setPaypal] = React.useState(false);
    const [cash, setCash] = React.useState(false);


    const handleRadioChange = (value: string) => {
        if (value === "card") {
            setCard(true)
            setPaypal(false)
            setCash(false)
            onChange(value)
        }
        if (value === "paypal") {
            setCard(false)
            setPaypal(true)
            setCash(false)
            onChange(value)
        }
        if (value === "cash") {
            setCard(false)
            setPaypal(false)
            setCash(true)
            onChange(value)
        }

    };


    return (
        <div>
            <div className={styles.title}>Choose a payment method</div>
            <div style={{background: card ? "#FEF5E7" : "",}} className={styles.payMethod}
                 onClick={() => handleRadioChange("card")}>
                <label style={{color: card ? "#EE950F" : ""}} className={styles.card}>{"Visa, Mastercard"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={card} readOnly/>
                <span className={styles.checkbox}></span>
            </div>
            <div style={{background: paypal ? "#FEF5E7" : "",}} className={styles.payMethod}
                 onClick={() => handleRadioChange("paypal")}>
                <label style={{color: paypal ? "#EE950F" : ""}} className={styles.paypal}>{"Palypal"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={paypal} readOnly/>
                <span className={styles.checkbox}></span>
            </div>
            <div style={{background: cash ? "#FEF5E7" : "",}} className={styles.payMethod}
                 onClick={() => handleRadioChange("cash")}>
                <label style={{color: cash ? "#EE950F" : ""}} className={styles.cash}>{"Cash"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={cash} readOnly/>
                <span className={styles.checkbox}></span>
            </div>

        </div>
    );
};

