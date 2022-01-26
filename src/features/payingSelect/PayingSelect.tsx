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
            <div className={styles.payMethod} onClick={() => handleRadioChange("card")}>
                <label className={styles.card}>{"Visa, Mastercard"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={card}/>
                <span className={styles.checkbox}></span>
            </div>
            <div className={styles.payMethod} onClick={() => handleRadioChange("paypal")}>
                <label className={styles.paypal}>{"Palypal"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={paypal}/>
                <span className={styles.checkbox}></span>
            </div>
            <div className={styles.payMethod} onClick={() => handleRadioChange("cash")}>
                <label className={styles.cash}>{"Cash"}</label>
                <input className={styles.check_input} type={"checkbox"} checked={cash}/>
                <span className={styles.checkbox}></span>
            </div>

        </div>
    );
};

