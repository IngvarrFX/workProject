export const setCheckedItemAC = (payload: {value: boolean, id: string}) => ({
    type: "SET_CHECKED_ITEM",
    payload
})


export type SetCheckedItemType = {
    type: "SET_CHECKED_ITEM"
    payload: {
        value: boolean, id: string
    }
}
