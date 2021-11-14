import { put, takeEvery, call } from "redux-saga/effects"

import { FETCH_FORMS, CREATE_FORM } from "../Actions/ActionTypes";
import { set_forms, fetch_form_err, success_create_form, fail_create_form} from "../Actions/Actions"
import { fetchFormList, createForm } from '../../Apis'


function* handlerLoadForm(action) {
    try {
        const formResp = yield call(fetchFormList, action.data);
        if(formResp.status === 200){
            yield put(set_forms(formResp.data))
        }else{
            yield put(set_forms([]))
        }
    }catch(error){
        yield put(set_forms([]))
        yield put(fetch_form_err(error))
    }
}

function* handleCreateForm(action) {
    try {
        const formResp = yield call(createForm, action.data);
        if(formResp.status === 200){
            yield put(success_create_form(formResp.data));
            window.history.back()
        }else{
            yield put(fail_create_form())
            window.location.replace("/")
        }
    }catch(error){
        yield put(set_forms([]))
        yield put(fetch_form_err(error))
    }

}

function* rootSaga() {
    yield takeEvery(FETCH_FORMS.LOAD, handlerLoadForm)
    yield takeEvery(CREATE_FORM.LOAD, handleCreateForm)
}

export default rootSaga;