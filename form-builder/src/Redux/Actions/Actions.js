import { FETCH_FORMS } from "./ActionTypes"

const load_forms = (data) => {
    return {
        type : FETCH_FORMS.LOAD,
        data : data
    }
}

const  set_forms = (forms) => {
    return {
        type : FETCH_FORMS.LOAD_SUCCESS,
        forms
    }
}

const fetch_form_err = (error) => {
    return {
        type : FETCH_FORMS.LOAD_FAIL,
        error
    }
}

export { load_forms, set_forms, fetch_form_err }