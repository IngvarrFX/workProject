export const setCheckedWarehouseAC = (value: boolean, idWarehouse: string) => ({
    type: "SET_CHECKED_WAREHOUSE",
    value,
    idWarehouse
})


export type SetCheckedWarehouseType = {
    type: "SET_CHECKED_WAREHOUSE"
    value: boolean
    idWarehouse: string
}
