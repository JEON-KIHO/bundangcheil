import { CHECK_USER } from "./types";

export const checkUser = (userState, phone, name) => {
    return {
        type: CHECK_USER,
        name,
        phone,
        userState
    }
}