import { CHECK, OPEN_LIST } from "./types";
import { termsState } from "../state";

const termsReducer = (state = termsState, action) => {
    switch(action.type) {
        case CHECK :
            return {
                ...state,
                info1: action.info1,
                info2: action.info2,
                infoAll: action.info1 && action.info2
            }
        case OPEN_LIST :
            return {
                ...state,
                termsListState: action.termsListState,
                termsListTitle: action.termsListTitle,
                termsListContent: action.termsListContent
            }
        default : return state
    }
}

export default termsReducer