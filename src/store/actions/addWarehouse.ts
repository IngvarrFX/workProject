export const AddWarehouse = (id: string, name: string, lenght: string, width: string, height: string) => ({
    type: "ADD_WAREHOUSE",
    id,
    name,
    lenght,
    width,
    height
})


export type AddWarehouseType = {
    type: "ADD_WAREHOUSE"
    id: string
    name: string
    lenght: string
    width: string
    height: string
}
