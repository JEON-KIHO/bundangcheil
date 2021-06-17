import { NAV_SWITCH, BACK_SWITCH, LOGO_SWITCH, MENU_SWITCH } from "./types";

export const navSwitch = (back, logo, logoText, menu) => {
    return {
        type: NAV_SWITCH,
        back,
        logo,
        logoText,
        menu
    }
}

export const backSwitch = back => {
    return {
        type: BACK_SWITCH,
        back
    }
}

export const logoSwitch = (logo, logoText) => {
    return {
        type: LOGO_SWITCH,
        logo,
        logoText
    }
}

export const menuSwitch = menu => {
    return {
        type: MENU_SWITCH,
        menu
    }
}