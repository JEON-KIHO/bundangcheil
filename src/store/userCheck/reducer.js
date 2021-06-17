import { ALTER_USERSTATE, CHECK_USER, CREATE_TICKET } from "./types";
import { usersState } from "../state";

const usersReducer = (state = usersState, action) => {
    switch(action.type) {
        case CHECK_USER :
            return {
                ...state,
                name: action.name,
                phone: action.phone,
            }
        case CREATE_TICKET :
            return {
                ...state,
                ticket: action.ticket
            }
        case ALTER_USERSTATE :
            return {
                ...state,
                userState: action.userState
            }
        default : return state
    }
}

export default usersReducer