export const setEditItemAC = (payload: { id: string, name: string, tagline: string, first_brewed: string, image_url: string }): SetEditItemACType => ({
    type: "SET_EDIT_ITEM",
    payload
})


export type SetEditItemACType = {
    type: "SET_EDIT_ITEM"
    payload: {
        id: string, name: string, tagline: string, first_brewed: string, image_url: string
    }

}


