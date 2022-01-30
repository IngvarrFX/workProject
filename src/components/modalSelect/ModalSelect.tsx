import React from "react";
import styles from "./ModalSelect.module.css"
import {WarehouseType} from "../../data";


type ModalSelectPropsType = {
    setSelected: (value: string) => void
    selected: string
    warehouses: WarehouseType[]
}

export const ModalSelect: React.FC<ModalSelectPropsType> = ({warehouses, setSelected, selected}) => {

    const [isActive, setIsActive] = React.useState(false)


    const selectItem = (id: string)=> {
        setSelected(id)
        setIsActive(false)
    }

    let selectWarehouse = warehouses.filter(warehouse => warehouse.id === selected)[0]

    return (
        <div>
            <div className={styles.customSelect}>
                <div className={styles.label}>In</div>
                <div className={styles.dropDown}>
                    <div style={{color: selected ? "#3E4C59" : ""}} className={styles.dropDownBtn} onClick={() => setIsActive(!isActive)}>{selected ? selectWarehouse.title : "Select a warehouse"}</div>
                    {isActive
                        ?
                        <div className={styles.dropDownContent}>
                            {warehouses.map((warehouse) => (
                            <div key={warehouse.id} className={styles.dropDownItem}
                                 onClick={() => selectItem(warehouse.id)}>{warehouse.title}</div>
                            ))}
                        </div>
                        :
                        false
                    }
                </div>
            </div>
        </div>
    );
};

