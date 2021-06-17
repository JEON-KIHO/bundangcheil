import { NAV_SWITCH, BACK_SWITCH, LOGO_SWITCH, MENU_SWITCH } from "./types";
import { navState } from "../state";

const navReducer = (state = navState, action) => {
    switch(action.type) {
        case NAV_SWITCH :
            return {
                ...state,
                back: action.back,
                logo: action.logo,
                logoText: action.logoText,
                menu: action.menu
            }
        case BACK_SWITCH :
            return {
                ...state,
                back: action.back
            }
        case LOGO_SWITCH :
            return {
                ...state,
                logo: action.logo,
                logoText: action.logoText
            }
        case MENU_SWITCH :
            return {
                ...state,
                menu: action.menu
            }
        default : return state
    }
}

export default navReducer