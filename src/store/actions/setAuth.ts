export const setAuth = (): SetAuthType => ({type: "APP/SET_AUTH" as const})

//tupe
export type SetAuthType = {
    type: "APP/SET_AUTH"
}
