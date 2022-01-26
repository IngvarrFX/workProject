import {ShipmentMethodType} from "../../data";

export const AddProduct = (data: DataType) => ({type: "ADD_PRODUCT", data})


export type AddProductType = {
    type: "ADD_PRODUCT"
    data: DataType
}


type DataType = {
    id:string
    warehouseId: string
    productName: string
    manufacturer: string
    itemNumber: string
    purchasing: "A" | "S" | "D" | "F"
    payMethod: "card" | "paypal" | "cash"
    shipMethod: ShipmentMethodType
}
