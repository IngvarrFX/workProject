import React, {useEffect, useMemo} from "react";
import styles from "./Warehouses.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {Footer} from "../footer/Footer";
import {removeWarehouses} from "../../store/actions/removeWarehouses";
import {ApiImprovedDataType} from "../../types/types";
import {WrappedComponent} from "../table/tableData";


type WarehousesPropsType = {
    title: string
    chooseProduct: (id: string, title: string) => void
    isShowModal: () => void
    checkedAll: (value: boolean) => void
    value: boolean
}


export const Warehouses: React.FC<WarehousesPropsType> = ({title, chooseProduct, isShowModal, checkedAll, value}) => {

    /*const data = useSelector<AppStateType, DataType>(state => state.warehouses)
    const theadData: Array<string> = ["All stores", "Number of products", "Length, m", "Width, m", "Height, m"]*/
    const data = useSelector<AppStateType, ApiImprovedDataType[]>(state => state.table.items)
    const theadData: Array<string> = ["Id", "Name", "Tagline", "First_brewed", "Image"]

    //const [successModal, setSuccessModal] = React.useState(false)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({type: "LOAD_DATA"})
    }, [])


    let checkedWarehousesItem: string[] = []




    const selectedItems = useMemo(() => {
        let result = data.filter(item => item.selected)
        checkedWarehousesItem = result.map((obj: ApiImprovedDataType) => obj.id.toString());
        return checkedWarehousesItem.length
    }, [data])



    const setCheckWarehouse = (value: boolean, warehouseId: string) => {
        console.log(value)
        dispatch({type: "SET_CHECKED", payload: {value, id: warehouseId}})
    }



    // const editWarehouse = () => {
    //
    // }

    const deleteItem = () => {
        checkedAll(false)
        dispatch(removeWarehouses(checkedWarehousesItem))
    }

    const footerStyle = {
        transition: "1s",
    }


    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.control}>
                    <select className={styles.select}>
                        <option selected>Filter by</option>
                        <option>Apples</option>
                        <option>Chocklate</option>
                        <option>Pancakes</option>
                    </select>
                    <button className={styles.addButton} onClick={isShowModal}
                            disabled={checkedWarehousesItem.length !== 0}>Add a warehouse +
                    </button>
                </div>
            </div>

            <div className={styles.table}>
                <WrappedComponent theadData={theadData} trow={data}
                                  chooseProduct={chooseProduct}
                                  checkedAll={checkedAll}
                                  changeCheckedWarehouse={setCheckWarehouse}
                                  value={value}
                />
            </div>
            <div style={footerStyle}>
                {checkedWarehousesItem.length
                    ?
                    <Footer>
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
