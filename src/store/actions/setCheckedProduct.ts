export const setCheckedProductAC = (value: boolean, productId: string, idWarehouse: string) => ({
    type: "SET_CHECKED_PRODUCT",
    value,
    productId,
    idWarehouse
})


export type SetCheckedProductType = {
    type: "SET_CHECKED_PRODUCT"
    value: boolean
    idWarehouse: string
    productId: string
}
