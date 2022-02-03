import React, {useState} from "react";
import {NavBar} from "../navBar/NavBar";
import MainContainer from "../../common/style/MainContainer.module.css"
import styles from "./Main.module.css"
import {Warehouses} from "../warehouses/Warehouses";
import {Warehouse} from "../warehouses/Warehouse";
import {AddWarehouse} from "../../store/actions/addWarehouse";
import {useDispatch} from "react-redux";
import {AddWarehouseModal} from "../modal/addWarehouseModal/AddWarehouseModal";
import {Input} from "../input/Input";
import {Routes, Route} from "react-router-dom"
import success from "../../assets/successWarehouse.svg";
import {SuccsessModal} from "../modal/succsessModal/SuccsessModal";
import {setCheckedWarehouses} from "../../store/actions/setChecked";
import {setUncheckedWarehouses} from "../../store/actions/setUncheckedWarehouses";
import {setCheckedAllProductAC} from "../../store/actions/setCheckedAllProduct";
import {setUnCheckedAllProductAC} from "../../store/actions/setUncheckedAllProduct";
import {v1} from "uuid";
import {Home} from "../home/Home";
import {Account} from "../account/Account";
import {Cards} from "../cards/Cards";
import {Contacts} from "../contacts/Contacts";
import {Chat} from "../chat/Chat";
import {AddItem} from "../../store/actions/addItem";


export const Main = () => {


    const [idWarehouse, setIdWarehouse] = React.useState("");
    const [titleProduct, setTitleProduct] = React.useState("");
    const [step, setStep] = React.useState(0)


    const [checkedAll, setCheckedAll] = useState(false)
    const [checkedAllProduct, setCheckedAllProduct] = useState(false)
    const [successModal, setSuccessModal] = React.useState(false)


    const dispatch = useDispatch()

    const [showInput, setShowInput] = useState(false)
    //const [showProductModal, setShowProductModal] = useState(false)
    const [name, setName] = useState("")
    const [length, setLength] = useState("")
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

    /* const addProduct = () => {
         setName("")
         setLenght("")
         setWidth("")
         setHeight("")
     }*/

    const showAddWarehoseModal = () => {
        setShowInput(true)
        setStep(s => s + 1)
    }

    const addWarehouse = () => {
        //dispatch(AddWarehouse(v1(), name, length, width, height))
        dispatch(AddItem(v1(), name, length, width, height))
        setName("")
        setLength("")
        setWidth("")
        setHeight("")
        setStep(s => s + 1)
        setSuccessModal(true)
    }

    const closeCreateWarehouseModal = () => {
        setStep(0)
        setShowInput(false)
    }


    const closeSuccessModal = () => {
        setStep(0)
        setSuccessModal(false)
    }


    const disable = name === "" || length === "" || width === "" || height === ""


    const stepModalWarehouses = (step: number) => {
        switch (step) {
            case 1:
                return <AddWarehouseModal isShow={showInput} setIsShow={closeCreateWarehouseModal}>
                    <div style={{display: "flex", flexDirection: "column", width: 100}}>
                        <Input value={name} setValue={(value) => setName(value)}
                               placeholder={"Enter a name"} label={"Name of the warehouse"}/>
                        <Input value={length} setValue={(value) => setLength(value)}
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
                return <SuccsessModal isOpen={successModal} toggleMode={() => setSuccessModal(false)}>
                    <img className={styles.img} src={success}/>
                    <span className={styles.successTitle}>Warehouse successfully added</span>
                    <button className={styles.addButton} onClick={closeSuccessModal}>Continue
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
                            <Routes>
                                <Route path="/warehouses" element={<Warehouses title={"Warehouses"}
                                                                               chooseProduct={openProductTableHandle}
                                                                               isShowModal={showAddWarehoseModal}
                                                                               checkedAll={(value) => setCheckedAll(value)}
                                                                               value={checkedAll}/>}/>
                                <Route path="warehouses/warehouse"
                                       element={<Warehouse title={titleProduct} idWarehouse={idWarehouse}
                                                           isShowModal={() => setShowInput(true)}
                                                           checkedAll={(value) => setCheckedAllProduct(value)}
                                                           value={checkedAllProduct}/>}/>
                                <Route path='/home' element={<Home/>}/>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/accounts' element={<Account/>}/>
                                <Route path='/cards' element={<Cards/>}/>
                                <Route path='/contacts' element={<Contacts/>}/>
                                <Route path='/chat' element={<Chat/>}/>
                            </Routes>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
