import { FETCH_FORMS } from "../Actions/ActionTypes"


const initialState = {
    forms : []

}

const FormsReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_FORMS.LOAD_SUCCESS : {
            return {
                ...state,
                forms : action.forms
            }
        };

        default : {
            return {
                ...state
            }
        }
    }
}


export default FormsReducer