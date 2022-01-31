import {take, takeEvery} from "redux-saga/effects"

export function* workerSaga() {
    console.log("Saga click!")
}


export function* watchClickSaga() {
    /*while (true) {
        yield take("CLICK")
        yield workerSaga
    }*/
    yield takeEvery("CLICK", workerSaga)

}


export function* rootSaga() {
    yield watchClickSaga()
    console.log("rootSaga")
}