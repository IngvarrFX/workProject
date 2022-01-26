import React, {useEffect, useMemo} from "react";
import styles from "./Warehouses.module.css"
import {BasicTable} from "../table/BaseTable";
import {DataType} from "../../data"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {setCheckedProductAC} from "../../store/actions/setCheckedProduct";
import {setCheckedWarehouseAC} from "../../store/actions/setCheckWarehouse";
import {Footer} from "../footer/Footer";


type WarehousesPropsType = {
    title: string
    chooseProduct: (id: string, title: string) => void
    isShowModal: () => void
    checkedAll: (value: boolean) => void
}


export const Warehouses: React.FC<WarehousesPropsType> = ({title, chooseProduct, isShowModal, checkedAll}) => {

    const data = useSelector<AppStateType, DataType>(state => state.warehouses)
    const theadData: Array<string> = ["All stores", "Number of products", "Length, m", "Width, m", "Height, m"]

    const [succsessModal, setSuccsessModal] = React.useState(false)

    const dispatch = useDispatch()

    let chekedWarehousesItem = []
    let chekedProductsItem = []


    /*useEffect(() => {
        chekedWarehousesItem = data.filter(warehouse => warehouse.selected)
    }, [data])*/
    const selectedItems = useMemo(() => {
        chekedWarehousesItem = data.filter(warehouse => warehouse.selected)
        return chekedWarehousesItem.length
    }, [data])


    const setCheckWarehouse = (value: boolean, warehouseId: string) => {
        dispatch(setCheckedWarehouseAC(value, warehouseId))
    }

    const moveItem = () => {

    }

    const deleteItem = () => {

    }

    console.log(chekedWarehousesItem.length)


    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.control}>
                    <select defaultValue={"Filter by"} className={styles.select}>
                        <option>Apples</option>
                        <option>Chocklate</option>
                        <option>Pancakes</option>
                    </select>
                    <button className={styles.addButton} onClick={isShowModal}>Add a warehouse +</button>
                </div>
            </div>

            <div className={styles.table}>
                <BasicTable theadData={theadData} trow={data} chooseProduct={chooseProduct} checkedAll={checkedAll}
                            changeCheckedWarehouse={setCheckWarehouse}/>
            </div>
            <Footer count={selectedItems} deleteItem={deleteItem} moveItem={moveItem}/>
        </div>
    );
};
