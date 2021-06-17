import { CHECK, OPEN_LIST } from "./types";

export const check = (info1, info2, infoAll) => {
    return {
        type: CHECK,
        info1,
        info2,
        infoAll
    }
}

export const openList = (termsListState, termsListTitle, termsListContent) => {
    return {
        type: OPEN_LIST,
        termsListState,
        termsListTitle,
        termsListContent
    }
}