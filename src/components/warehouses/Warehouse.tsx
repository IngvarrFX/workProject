import React from "react";
import styles from "./Warehouse.module.css"
import {DataType} from "../../data"
import {ProductTable} from "../table/ProductTable";
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {AddProductModal} from "../modal/addProductModal/AddProductModal";
import {Input} from "../input/Input";


type WarehousePropsType = {
    title: string
    idProduct: string
    isShowModal: () => void
    nextStep: () => void
    step: number
}


export const Warehouse: React.FC<WarehousePropsType> = ({title, idProduct, isShowModal, nextStep, step}) => {

    const [isShowAddProductModal, setIsShowAddProductModal] = React.useState(false)

    const [name, setName] = React.useState("")

    const data = useSelector<AppStateType, DataType>(state => state.warehouses)
    const theadWarehouse: Array<string> = ["All products", "Manufacturer", "Item number", "Purchasing technology", "Shipment method"]

    const findProducts = (data: DataType, id: string) => {
        return data.filter(warehouse => warehouse.id === id ? warehouse.products : "")
    }


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
                    <button className={styles.addButton} onClick={() => setIsShowAddProductModal(true)}>Add cargo +
                    </button>
                </div>
            </div>
            <div className={styles.table}>
                <ProductTable theadData={theadWarehouse} trow={findProducts(data, idProduct)}/>
            </div>
            <AddProductModal isShow={isShowAddProductModal} setIsShow={() => setIsShowAddProductModal(false)}
                             nextStep={nextStep} step={step}>
                <Input label={"Product name"} placeholder={"Enter a name"} value={name} setValue={(value)=> setName(value)}/>
            </AddProductModal>
        </div>
    );
};

