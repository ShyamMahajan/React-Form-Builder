import { FETCH_FORMS } from "../Actions/ActionTypes"

const initialState = {
    formTable : null
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
        
        default : {
            return {
                ...state
            }
        }
    }
}


export default ErrorReducer