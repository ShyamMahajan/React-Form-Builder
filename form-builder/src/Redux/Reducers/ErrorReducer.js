import { FETCH_FORMS, CREATE_FORM } from "../Actions/ActionTypes"

const initialState = {
    formTable : null,
    createForm: null
}

const ErrorReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_FORMS.LOAD_FAIL : {

            return {
                ...state,
                formTable : action.error
            }
        }
        case FETCH_FORMS.LOAD :
        case FETCH_FORMS.LOAD_SUCCESS : {
            return {
                ...state,
                formTable : null
            };
        };

        case CREATE_FORM.LOAD_FAIL : {

            return {
                ...state,
                createForm : action.error
            }
        }
        case CREATE_FORM.LOAD :
        case CREATE_FORM.LOAD_SUCCESS : {
            return {
                ...state,
                createForm : null
            };
        };
        
        default : {
            return {
                ...state
            }
        }
    }
}


export default ErrorReducer