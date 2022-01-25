import {setAuth, SetAuthType} from "../actions/setAuth";

const initialState: InitialStateType = {
    isAuth: false,
    email: '',
    password: '',
}


export const AppReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_AUTH": {
            return {...state, isAuth: true}
        }
        default:
            return state
    }
}


//types
type InitialStateType = {
    isAuth: boolean
    email:string
    password: string
}

type ActionType = SetAuthType
