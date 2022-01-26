import React, {useState} from "react";
import styles from "./Warehouse.module.css"
import {DataType, ShipmentMethodType} from "../../data"
import {ProductTable} from "../table/ProductTable";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {AddProductModal} from "../modal/addProductModal/AddProductModal";
import {Input} from "../input/Input";
import {RadioButton} from "../../features/radioButton/RadioButton";
import {ShipingSelect} from "../../features/shipingSelect/ShipingSelect";
import {PayingSelect} from "../../features/payingSelect/PayingSelect";
import {AddProduct} from "../../store/actions/addProduct";
import {SuccsessModal} from "../modal/succsessModal/SuccsessModal";
import success from "../../assets/successImg2.svg"
import {setCheckedProductAC} from "../../store/actions/setCheckedProduct";
import {v1} from "uuid";


type WarehousePropsType = {
    title: string
    idWarehouse: string
    isShowModal: () => void
    checkedAll: (value: boolean) => void
}


export const Warehouse: React.FC<WarehousePropsType> = ({title, idWarehouse, isShowModal, checkedAll}) => {


    const [isShowAddProductModal, setIsShowAddProductModal] = React.useState(false)
    const [succsessModal, setSuccsessModal] = React.useState(false)

    const [step, setStep] = useState(0)

    const [productName, setProductName] = React.useState("");
    const [manufacturer, setManufacturer] = React.useState("");
    const [itemNumber, setItemNumber] = React.useState("");
    const [purchasing, setPurchasing] = React.useState<"A" | "S" | "D" | "F">("A");


    const [payMethod, setPayMethod] = useState<"card" | "paypal" | "cash">("card")
    const [shipMethod, setShipMethod] = useState<ShipmentMethodType>("AIR")


    const data = useSelector<AppStateType, DataType>(state => state.warehouses)
    const theadWarehouse: Array<string> = ["All products", "Manufacturer", "Item number", "Purchasing technology", "Shipment method"]


    const dispatch = useDispatch()

    const findProducts = (data: DataType, id: string) => {
        return data.filter(warehouse => warehouse.id === id ? warehouse.products : "")
    }


    const isCloseProductModale = () => {
        setIsShowAddProductModal(false)
        setStep(0)
        setProductName("")
        setManufacturer("")
        setItemNumber("")
        setPurchasing("A")
        setPayMethod("card")
        setShipMethod("AIR")
    }


    const isShowProductModal = () => {
        setIsShowAddProductModal(true)
        setStep(s => s + 1)
    }


    const nextStep = () => {
        if (step < 5) {
            setStep(s => s + 1)
        }
    }

    const createProduct = () => {

        dispatch(AddProduct({
            warehouseId: idWarehouse,
            id: v1(),
            shipMethod,
            productName,
            payMethod,
            itemNumber,
            manufacturer,
            purchasing,

        }))
        setProductName("")
        setManufacturer("")
        setItemNumber("")
        setPurchasing("A")
        setPayMethod("card")
        setShipMethod("AIR")

        setStep(s => s + 1)
        setSuccsessModal(true)
    }

    const setCheckProduct = (value: boolean, productId: string) => {
        dispatch(setCheckedProductAC(value, productId, idWarehouse))
    }

    const closeSuccessModal = () => {
        setStep(0)
        setSuccsessModal(false)
    }


    const disable = productName === "" || manufacturer === "" || itemNumber === ""

    const stepModal = (step: number) => {
        switch (step) {
            case 1:
                return <AddProductModal isShow={isShowAddProductModal} setIsShow={isCloseProductModale}
                                        nextStep={nextStep}
                                        title={"Adding a product"}
                                        step={step}>
                    <Input label={"Product name"} placeholder={"Enter a name"} value={productName}
                           setValue={(value) => setProductName(value)}/>
                    <Input label={"Manufacturer"} placeholder={"Enter a name"} value={manufacturer}
                           setValue={(value) => setManufacturer(value)}/>
                    <Input label={"Item number"} placeholder={"Enter the number"} value={itemNumber}
                           setValue={(value) => setItemNumber(value)}/>
                    <RadioButton onChange={(value) => setPurchasing(value)}/>
                    <button className={styles.nextBtn}
                            style={{backgroundColor: disable ? "#E6E8EA" : ""}}
                            disabled={disable}
                            onClick={nextStep}>Next step
                    </button>
                </AddProductModal>;

            case 2:
                return <AddProductModal isShow={isShowAddProductModal} setIsShow={isCloseProductModale}
                                        nextStep={nextStep}
                                        step={step} title={"Shipping method"}>
                    <ShipingSelect onChange={(value) => setShipMethod(value)}/>
                    <button className={styles.nextBtn} onClick={nextStep}>Next</button>
                </AddProductModal>;
            case 3:
                return <AddProductModal isShow={isShowAddProductModal} setIsShow={isCloseProductModale}
                                        nextStep={nextStep}
                                        step={step}
                                        title={"Payment method"}
                >
                    <PayingSelect onChange={(value) => setPayMethod(value)}/>
                    <button className={styles.nextBtn} onClick={createProduct}>Choose
                    </button>
                </AddProductModal>;
            case 4:
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
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.control}>
                    <select defaultValue={"Filter by"} className={styles.select}>
                        <option>Apples</option>
                        <option>Chocklate</option>
                        <option>Pancakes</option>
                    </select>
                    <button className={styles.addButton} onClick={isShowProductModal}>Add cargo +
                    </button>
                </div>
            </div>
            <div className={styles.table}>
                <ProductTable theadData={theadWarehouse} trow={findProducts(data, idWarehouse)} checkedAll={checkedAll}
                              onChangeChecked={setCheckProduct}/>
            </div>
            {stepModal(step)}
        </div>
    );
};

