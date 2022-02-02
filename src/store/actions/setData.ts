import {ApiDataType, InitialStateType} from "../../types/types";

export const setData = (payload: InitialStateType[]): SetDataType => ({type: "SET_DATA", payload})

export type SetDataType = {
    type: "SET_DATA"
    payload: InitialStateType[]
}