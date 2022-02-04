export const AddItem = (payload: PayloadType) => ({type: "ADD_ITEM", payload})


type PayloadType = {
    id: string
    name: string
    tagline: string
    first_brewed: string
    image_url: string
}


export type AddItemType = {
    type: "ADD_ITEM"
    payload:PayloadType
}
