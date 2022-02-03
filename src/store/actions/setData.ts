import {ApiDataType, ApiImprovedDataType} from "../../types/types";

export const setData = (payload: ApiImprovedDataType[]): SetDataType => ({type: "SET_DATA", payload})

export type SetDataType = {
    type: "SET_DATA"
    payload: ApiImprovedDataType[]
}