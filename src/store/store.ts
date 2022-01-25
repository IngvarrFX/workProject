import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {AppReducer} from "./reducers/appReducer";
import {WarehouseReducer} from "./reducers/warehouseReducer";


const rootReducer = combineReducers({
    app: AppReducer,
    warehouses: WarehouseReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


const store = createStore(rootReducer, applyMiddleware(thunk));
export default // @ts-ignore
window.store = store;
