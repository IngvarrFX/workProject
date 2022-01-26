export const setCheckedAllProductAC = (idWarehouse: string) => ({type: "SET_CHECKED_ALL_PRODUCT", idWarehouse})


export type SetCheckedAllProductType = {
    type: "SET_CHECKED_ALL_PRODUCT"
    idWarehouse: string
}
