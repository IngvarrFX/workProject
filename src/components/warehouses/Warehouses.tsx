import React from "react";
import styles from "./Warehouses.module.css"
import {BasicTable} from "../table/BaseTable";
import {DataType} from "../../data"
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";


type WarehousesPropsType = {
    title: string
    chooseProduct: (id: string, title: string)=> void
    isShowModal: () => void
}


export const Warehouses: React.FC<WarehousesPropsType> = ({title,chooseProduct, isShowModal}) => {

    const data = useSelector<AppStateType, DataType>(state => state.warehouses)
    const theadData: Array<string> = ["All stores", "Number of products", "Length, m", "Width, m", "Height, m"]



    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.control}>
                    <select className={styles.select}>
                        <option>Apples</option>
                        <option selected>Filter by</option>
                        <option>Chocklate</option>
                        <option>Pancakes</option>
                    </select>
                    <button className={styles.addButton} onClick={isShowModal}>Add a warehouse +</button>
                </div>
            </div>

            <div className={styles.table}>
                <BasicTable theadData={theadData} trow={data} chooseProduct={chooseProduct}/>
            </div>
        </div>
    );
};
