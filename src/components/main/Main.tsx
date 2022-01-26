import React, {useEffect, useState} from "react";
import {NavBar} from "../navBar/NavBar";
import MainContainer from "../../common/style/MainContainer.module.css"
import styles from "./Main.module.css"
import {Warehouses} from "../warehouses/Warehouses";
import {Warehouse} from "../warehouses/Warehouse";
import {AddWarehouse} from "../../store/actions/addWarehouse";
import {useDispatch, useSelector} from "react-redux";
import {AddWarehouseModal} from "../modal/addWarehouseModal/AddWarehouseModal";
import {Input} from "../input/Input";
import success from "../../assets/successImg2.svg";
import {SuccsessModal} from "../modal/succsessModal/SuccsessModal";
import {setCheckedWarehouses} from "../../store/actions/setChecked";
import {setUncheckedWarehouses} from "../../store/actions/setUncheckedWarehouses";
import {setCheckedAllProductAC} from "../../store/actions/setCheckedAllProduct";
import {setUnCheckedAllProductAC} from "../../store/actions/setUncheckedAllProduct";
import {v1} from "uuid";
import {Footer} from "../footer/Footer";
import {AppStateType} from "../../store/store";
import {DataType} from "../../data";


export const Main = () => {


    const [idWarehouse, setIdWarehouse] = React.useState("");
    const [titleProduct, setTitleProduct] = React.useState("");
    const [step, setStep] = React.useState(0)


    const [checkedAll, setCheckedAll] = useState(false)
    const [checkedAllProduct, setCheckedAllProduct] = useState(false)
    const [succsessModal, setSuccsessModal] = React.useState(false)



    const dispatch = useDispatch()

    const [showInput, setShowInput] = useState(false)
    const [showProductModal, setShowProductModal] = useState(false)
    const [name, setName] = useState("")
    const [lenght, setLenght] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")


    const openProductTableHandle = (id: string, title: string) => {
        setIdWarehouse(id)
        setTitleProduct(title)
    }


    if (checkedAll) {
        dispatch(setCheckedWarehouses())
    }
    if (!checkedAll) {
        dispatch(setUncheckedWarehouses())
    }
    if (checkedAllProduct) {
        dispatch(setCheckedAllProductAC(idWarehouse))
    }
    if (!checkedAllProduct && idWarehouse !== "") {
        dispatch(setUnCheckedAllProductAC(idWarehouse))
    }

    const addProduct = () => {
        setName("")
        setLenght("")
        setWidth("")
        setHeight("")
    }

    const showAddWarehoseModal = () => {
        setShowInput(true)
        setStep(s => s + 1)
    }

    const addWarehouse = () => {
        dispatch(AddWarehouse(v1(), name, lenght, width, height))
        setName("")
        setLenght("")
        setWidth("")
        setHeight("")
        setStep(s => s + 1)
    }
    const closeSuccessModal = () => {
        setStep(0)
        setSuccsessModal(false)
    }



    const disable = name == "" || lenght == "" || width == "" || height == ""


    const stepModalWarehouses = (step: number) => {
        switch (step) {
            case 1:
                return <AddWarehouseModal isShow={showInput} setIsShow={() => setShowInput(false)}>
                    <div style={{display: "flex", flexDirection: "column", width: 100}}>
                        <Input value={name} setValue={(value) => setName(value)}
                               placeholder={"Enter a name"} label={"Name of the warehouse"}/>
                        <Input value={lenght} setValue={(value) => setLenght(value)}
                               placeholder={"Enter the length"} label={"Length, m"}/>
                        <Input value={width} setValue={(value) => setWidth(value)}
                               placeholder={"Enter the width"} label={"Width, m"}/>
                        <Input value={height} setValue={(value) => setHeight(value)}
                               placeholder={"Enter the height"} label={"Height, m"}/>
                        <button className={styles.addButton} style={{backgroundColor: disable ? "#E6E8EA" : ""}}
                                disabled={disable} onClick={addWarehouse}>Add a
                            warehouse
                        </button>
                    </div>
                </AddWarehouseModal>
            case 2:
                return <SuccsessModal isOpen={succsessModal} toggleMode={() => setSuccsessModal(false)}>
                    <img className={styles.img} src={success}/>
                    <span className={styles.successTitle}>The cargo was successfully created</span>
                    <button className={styles.nextBtn} onClick={closeSuccessModal}>Continue
                    </button>
                </SuccsessModal>
            default:
                return false
        }
    }


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
                        {stepModalWarehouses(step)}
                        <div className={styles.contentBlock}>
                            {idWarehouse == ""
                                ?
                                <Warehouses title={"Warehouses"} chooseProduct={openProductTableHandle}
                                            isShowModal={showAddWarehoseModal}
                                            checkedAll={(value) => setCheckedAll(value)}/>
                                :
                                <Warehouse title={titleProduct} idWarehouse={idWarehouse}
                                           isShowModal={() => setShowInput(true)}
                                           checkedAll={(value) => setCheckedAllProduct(value)}
                                />
                            }
                        </div>
                    </div>
                </div>
                {/*{ chekedWarehousesItem.length
                    ?
                    <div className={styles.footer}>
                        <Footer count={2} moveItem={moveItem} deleteItem={deleteItem}/>
                    </div>
                    :
                    false
                }*/}
            </div>
        </div>
    );
};
