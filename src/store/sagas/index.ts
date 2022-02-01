import {takeEvery, put} from "redux-saga/effects"
import {setData} from "../actions/setData";


const getData = async () => {
    const request = await fetch("https://api.punkapi.com/v2/beers");
    return request.json();
}

export function* workerSaga(): {} {

    const data = yield getData()
    yield put(setData(data))
}


export function* watchClickSaga() {

    yield takeEvery("LOAD_DATA", workerSaga)

}


export function* rootSaga() {
    yield watchClickSaga()
    console.log("rootSaga")
}