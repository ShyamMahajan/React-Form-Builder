import { FETCH_FORMS, CREATE_FORM } from "../Actions/ActionTypes"

const initialState = {
    formsTable : false,
    createForm : false
}

const FormsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_FORMS.LOAD : {
            return {
                ...state,
                formsTable : true
            }
        };
        case FETCH_FORMS.LOAD_SUCCESS : {
            return {
                ...state,
                formsTable : false
            }
        };
        
        case FETCH_FORMS.LOAD_FAIL : {
            return {
                ...state,
                formsTable : false
            }
        }
        case CREATE_FORM.LOAD : {
            return {
                ...state,
                createForm : true
            }
        };
        case CREATE_FORM.LOAD_SUCCESS : {
            return {
                ...state,
                createForm : false
            }
        };
        
        case CREATE_FORM.LOAD_FAIL : {
            return {
                ...state,
                createForm : false
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}


export default FormsReducer