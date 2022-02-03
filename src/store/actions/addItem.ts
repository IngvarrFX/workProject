export const AddItem = (id: string, name: string, tagline: string, firstBrewed: string, image: string) => ({
    type: "ADD_ITEM",
    id,
    name,
    tagline,
    firstBrewed,
    image
})


export type AddItemType = {
    type: "ADD_ITEM"
    id: string
    name: string
    tagline: string
    firstBrewed: string
    image: string
}
