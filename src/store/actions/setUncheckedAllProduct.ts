export const setUnCheckedAllProductAC = (idWarehouse: string) => ({type: "SET_UNCHECKED_ALL_PRODUCT", idWarehouse})


export type SetUnCheckedAllProductType = {
    type: "SET_UNCHECKED_ALL_PRODUCT"
    idWarehouse: string
}
