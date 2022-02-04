export const setUncheckedAll = (payload: {value:boolean}):SetUncheckedAllType =>({type: "SET_UNCHECKED_ALL", payload})

export type SetUncheckedAllType = {
    type : "SET_UNCHECKED_ALL"
    payload: {value: boolean}
}