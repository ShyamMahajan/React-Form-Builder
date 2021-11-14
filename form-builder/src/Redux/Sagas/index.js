import { put, takeEvery, call } from "redux-saga/effects"

import { FETCH_FORMS } from "../Actions/ActionTypes";
import { set_forms, fetch_form_err} from "../Actions/Actions"
import { fetchFormList } from '../../Apis'


function* handlerLoadForm(action) {
    try {
        const formResp = yield call(fetchFormList, action.data);
        console.log("res" ,formResp)
        if(formResp.status === 200){
            yield put(set_forms(formResp.data))
        }else{
            yield put(set_forms([]))
        }
    }catch(error){
        console.log("error", error)
        yield put(set_forms([]))
        yield put(fetch_form_err(error))
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_FORMS.LOAD, handlerLoadForm)
}

export default rootSaga;