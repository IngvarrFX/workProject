import {call, put, takeEvery} from "redux-saga/effects"
import {setData} from "../actions/setData";
import {ApiDataType, ApiImprovedDataType} from "../../types/types";
import {setCheckedItemAC} from "../actions/setCheckItem";
import {setEditItemAC} from "../actions/editItemAC";
import {AddItem} from "../actions/addItem";
import {setCheckedWarehouses} from "../actions/setChecked";
import {setUncheckedWarehouses} from "../actions/setUncheckedWarehouses";
import {setUncheckedAll} from "../actions/setUncheckedAll";


const getData = async () => {
    const request = await fetch("https://api.punkapi.com/v2/beers");
    return request.json();
}


const transformData = (data: ApiDataType[]): ApiImprovedDataType[] => {
    return data.map(item => ({...item, selected: false, id: item.id.toString()}))
}


export function* getDataSaga(): {} {
    const data = yield call(getData)
    const resultData = yield call(transformData, data)
    yield put(setData(resultData))
}


export function* setCheckedSaga(action: { type: "SET_CHECKED", payload: { value: boolean, id: string } }): {} {
    yield put(setCheckedItemAC(action.payload))
}


export function* setEditItemSaga(action: { type: "EDIT_ITEM", payload: { id: string, name: string, tagline: string, first_brewed: string, image_url: string } }) {
    yield put(setEditItemAC(action.payload))
}

export function* addItemSaga(action: { type: "ADD_NEW_ITEM", payload: { id: string, name: string, tagline: string, first_brewed: string, image_url: string } }) {
    yield put(AddItem(action.payload))
}


export function* setCheckedWarehousesSaga(){
    yield put(setCheckedWarehouses())
}


export function* setUncheckedAllItemsSaga(){
    yield put(setUncheckedWarehouses())
}

export function* setUncheckedAllSaga(action: {type: "CHECKED_ALL", payload:{value: boolean}}){
    yield put(setUncheckedAll(action.payload))
}



export function* watchClickSaga() {
    yield takeEvery("LOAD_DATA", getDataSaga)
    yield takeEvery("SET_CHECKED", setCheckedSaga)
    yield takeEvery("EDIT_ITEM", setEditItemSaga)
    yield takeEvery("ADD_NEW_ITEM",addItemSaga)
    yield takeEvery("CHECKED_ALL_ITEMS", setCheckedWarehousesSaga)
    yield takeEvery("UNCHECKED_ALL_ITEMS",setUncheckedAllItemsSaga)
    yield takeEvery("CHECKED_ALL",setUncheckedAllSaga)
}


export function* rootSaga() {
    yield watchClickSaga()
    console.log("rootSaga")
}