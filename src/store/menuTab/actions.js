import { MENUTAB_SWITCH } from './types';

export const menuTabSwitch = (menuTab) => {
    return {
        type: MENUTAB_SWITCH,
        menuTab
    }
}