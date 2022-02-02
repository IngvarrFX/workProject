import {ApiDataType, InitialStateType} from "../../types/types";
import {SetDataType} from "../actions/setData";
import {SetCheckedWarehouseType} from "../actions/setCheckWarehouse";
import {SetUncheckedWarehousesType} from "../actions/setUncheckedWarehouses";
import {SetCheckedItemType} from "../actions/setCheckItem";


const initialState: InitialStateType[] = []


export const tableReducer = (state = initialState, action: ActionType): InitialStateType[] => {
    switch (action.type) {
        case "SET_DATA": {
            return [...state, ...action.payload]
        }
        case "SET_CHECKED_ITEM": {
            return state.map(item => item.id.toString() === action.payload.id ? {
                ...item,
                selected: action.payload.value
            } : item)
        }
        default:
            return state
    }
}

type ActionType = SetDataType
    | SetCheckedItemType