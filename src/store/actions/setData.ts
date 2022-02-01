import {ApiDataType} from "../../types/types";

export const setData = (payload: ApiDataType[]): SetDataType => ({type: "SET_DATA", payload})

export type SetDataType = {
    type: "SET_DATA"
    payload: ApiDataType[]
}