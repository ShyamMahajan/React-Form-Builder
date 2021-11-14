import { FETCH_FORMS } from "../Actions/ActionTypes"

const initialState = {
    formsTable : false
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
        default : {
            return {
                ...state
            }
        }
    }
}


export default FormsReducer