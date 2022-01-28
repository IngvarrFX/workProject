import React, {useMemo} from "react";
import styles from "./Warehouses.module.css"
import {BasicTable} from "../table/BaseTable";
import {DataType, WarehouseType} from "../../data"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {setCheckedWarehouseAC} from "../../store/actions/setCheckWarehouse";
import {Footer} from "../footer/Footer";
import {removeWarehouses} from "../../store/actions/removeWarehouses";




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

    let chekedWarehousesItem: string[] = []


    const selectedItems = useMemo(() => {
        let result = data.filter(warehouse => warehouse.selected)
        chekedWarehousesItem = result.map((obj: WarehouseType) => obj.id);
        return chekedWarehousesItem.length
    }, [data])


    const setCheckWarehouse = (value: boolean, warehouseId: string) => {
        dispatch(setCheckedWarehouseAC(value, warehouseId))
    }

    const editWarehouse = () => {

    }

    const deleteItem = () => {
        checkedAll(false)
        dispatch(removeWarehouses(chekedWarehousesItem))
    }

    const footerStyle = {
        transition: "1s",
    }


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
                    <button className={styles.addButton} onClick={isShowModal} disabled={chekedWarehousesItem.length !== 0}>Add a warehouse +</button>
                </div>
            </div>

            <div className={styles.table}>
                <BasicTable theadData={theadData} trow={data} chooseProduct={chooseProduct} checkedAll={checkedAll}
                            changeCheckedWarehouse={setCheckWarehouse}/>
            </div>
            <div style={footerStyle}>
                {chekedWarehousesItem.length
                    ?
                    <Footer >
                        <div className={styles.countSelect}>
                            Selected: {selectedItems}
                        </div>
                        <div className={styles.btn}>
                            <button onClick={deleteItem} className={styles.deleteBtn}>Delete</button>
                        </div>
                    </Footer>
                    : false
                }
            </div>

        </div>
    );
};
