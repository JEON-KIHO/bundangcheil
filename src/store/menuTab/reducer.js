import { MENUTAB_SWITCH } from './types';
import { menuTabState } from '../state';

const menuTabReducer = (state = menuTabState, action) => {
    switch(action.type) {
        case MENUTAB_SWITCH :
            return {
                ...state,
                menuTab: action.menuTab
            }
            default : return state
    }
}

export default menuTabReducer