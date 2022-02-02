import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {AppReducer} from "./reducers/appReducer";
import {WarehouseReducer} from "./reducers/warehouseReducer";
import {rootSaga} from "./sagas";
import {tableReducer} from "./reducers/tableReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    app: AppReducer,
    warehouses: WarehouseReducer,
    table: tableReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


const store = createStore(rootReducer,
    applyMiddleware(thunkMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
export default // @ts-ignore
window.store = store;

// @ts-ignore
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
