export const removeProduct = (payload: string[]) => ({type: "REMOVE_PRODUCT", payload})


export type RemoveProductType = {
    type: "REMOVE_PRODUCT"
    payload: string[]
}
