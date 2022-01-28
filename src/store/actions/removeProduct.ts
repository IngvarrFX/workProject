export const removeProduct = (ArrayId: string[], idWarehouse: string) => ({type: "REMOVE_PRODUCT", ArrayId, idWarehouse})


export type RemoveProductType = {
    type: "REMOVE_PRODUCT"
    idWarehouse: string
    ArrayId: string[]
}

