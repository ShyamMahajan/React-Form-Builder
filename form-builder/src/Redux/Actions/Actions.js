import { FETCH_FORMS, CREATE_FORM } from "./ActionTypes"

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

const load_create_form = (data) => {
    return {
        type : CREATE_FORM.LOAD,
        data : data
    }
}

const  success_create_form = (forms) => {
    return {
        type : CREATE_FORM.LOAD_SUCCESS,
        forms
    }
}

const fail_create_form = (error) => {
    return {
        type : CREATE_FORM.LOAD_FAIL,
        error
    }
}

export { load_forms, set_forms, fetch_form_err, load_create_form, success_create_form, fail_create_form }