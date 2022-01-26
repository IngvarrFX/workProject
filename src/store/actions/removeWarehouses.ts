export const removeWarehouses = (payload: string[]) => ({type: "REMOVE_WAREHOUSES", payload})


export type RemoveWarehousesType = {
    type: "REMOVE_WAREHOUSES"
    payload: string[]
}
