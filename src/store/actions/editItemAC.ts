export const setEditItemAC = (payload: { id: string | undefined, name: string, tagline: string, firstBrewed: string, imageUrl: string }): SetEditItemACType => ({
    type: "EDIT_ITEM",
    payload
})


export type SetEditItemACType = {
    type: "EDIT_ITEM"
    payload: {
        id: string | undefined, name: string, tagline: string, firstBrewed: string, imageUrl: string
    }

}
