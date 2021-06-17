import { GET_PHONE } from "./types";
import { usersState } from "../state";

const mainReducer = (state = usersState, action) => {
    switch(action.type) {
        case GET_PHONE :
            return {
                ...state,
            }
        default : return state
    }
}

export default mainReducer