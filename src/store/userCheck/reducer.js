import { CHECK_USER } from "./types";
import { usersState } from "../state";

const usersReducer = (state = usersState, action) => {
    switch(action.type) {
        case CHECK_USER :
            return {
                ...state,
                userState: action.userState,
                phone: action.phone,
                name: action.name
            }
        default : return state
    }
}

export default usersReducer