import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavBar} from "../navBar/NavBar";
import MainContainer from "../../common/style/MainContainer.module.css"
import styles from "./Main.module.css"
import {Warehouses} from "../warehouses/Warehouses";
import {Warehouse} from "../warehouses/Warehouse";
import {AddWarehouse} from "../../store/actions/addWarehouse";
import {useDispatch} from "react-redux";
import {AddWarehouseModal} from "../modal/addWarehouseModal/AddWarehouseModal";
import {Input} from "../input/Input";


export const Main = () => {


    const [idProduct, setIdProduct] = React.useState("");
    const [titleProduct, setTitleProduct] = React.useState("");
    const [showProductTable, setShowProductTable] = React.useState(false)
    const [showSuccess, setShowSuccess] = useState(false)


    const [checkedAll, setCheckedAll] = useState(false)


    const dispatch = useDispatch()

    const [showInput, setShowInput] = useState(false)
    const [showProductModal, setShowProductModal] = useState(false)
    const [name, setName] = useState("")
    const [lenght, setLenght] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")


    const navigate = useNavigate()

    const openProductTableHandle = (id: string, title: string) => {
        setIdProduct(id)
        setTitleProduct(title)
        /*navigate("/warehouse")*/

    }

    const addProduct = () => {
        //dispatch(AddProduct(name, lenght, width, height))
        setName("")
        setLenght("")
        setWidth("")
        setHeight("")
    }

    const addWarehouse = () => {
        dispatch(AddWarehouse(name, lenght, width, height))
        setShowInput(false)
        setName("")
        setLenght("")
        setWidth("")
        setHeight("")
    }

    const disable = name == "" || lenght == "" || width == "" || height == ""



    return (
        <div>
            <div className={MainContainer.container}>
                <div className={styles.mainBlock}>
                    <div>
                        <NavBar/>
                    </div>
                    <div className={styles.rightBlock}>
                        <div className={styles.headerPanel}>
                            <div className={styles.searchBlock}>
                                <label>
                                    <input placeholder={"Search"} className={styles.search} type="text"/>
                                </label>
                            </div>
                            <div className={styles.buttonPanel}>
                                <button className={styles.profile}></button>
                                <button className={styles.setting}></button>
                                <button className={styles.notification}></button>
                            </div>
                        </div>
                        {showInput
                            ? <AddWarehouseModal isShow={showInput} setIsShow={() => setShowInput(false)}>
                                <div style={{display: "flex", flexDirection: "column", width: 100}}>
                                    <Input value={name} setValue={(value) => setName(value)}
                                           placeholder={"Enter a name"} label={"Name of the warehouse"}/>
                                    <Input value={lenght} setValue={(value) => setLenght(value)}
                                           placeholder={"Enter the length"} label={"Length, m"}/>
                                    <Input value={width} setValue={(value) => setWidth(value)}
                                           placeholder={"Enter the width"} label={"Width, m"}/>
                                    <Input value={height} setValue={(value) => setHeight(value)}
                                           placeholder={"Enter the height"} label={"Height, m"}/>
                                    <button className={styles.addButton} style={{backgroundColor: disable ? "#E6E8EA" : ""}} disabled={disable} onClick={addWarehouse}>Add a
                                        warehouse
                                    </button>
                                </div>
                            </AddWarehouseModal>
                            :
                            false
                        }
                        <div className={styles.contentBlock}>
                            {idProduct == ""
                                ?
                                <Warehouses title={"Warehouses"} chooseProduct={openProductTableHandle}
                                            isShowModal={() => setShowInput(true)}/>
                                :
                                <Warehouse title={titleProduct} idProduct={idProduct}
                                           isShowModal={() => setShowInput(true)} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
