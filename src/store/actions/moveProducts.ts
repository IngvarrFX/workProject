import {ShipmentMethodType} from "../../data";

export const moveProducts = (payload: MoveDataType) => ({type: "MOVE_PRODUCT", payload})


export type MoveProductType = {
    type: "MOVE_PRODUCT"
    payload: MoveDataType
}


type MoveDataType = {
    fromId: string
    inId: string
    shipMethod: ShipmentMethodType
    payMethod: string
}


