import {ApiDataType} from "../../types/types";
import {SetDataType} from "../actions/setData";


const initialState: ApiDataType[] = []


export const tableReducer = (state = initialState, action: ActionType): ApiDataType[] => {
    switch (action.type) {
        case "SET_DATA": {
            return [...state, ...action.payload]
        }
        default:
            return state
    }
}

type ActionType = SetDataType