import {takeEvery, put, call} from "redux-saga/effects"
import {setData} from "../actions/setData";
import {ApiDataType, ApiImprovedDataType} from "../../types/types";
import {setCheckedItemAC} from "../actions/setCheckItem";


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


export function* watchClickSaga() {
    yield takeEvery("LOAD_DATA", getDataSaga)
    yield takeEvery("SET_CHECKED", setCheckedSaga)

}


export function* rootSaga() {
    yield watchClickSaga()
    console.log("rootSaga")
}