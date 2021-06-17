import { CHECK_USER, CREATE_TICKET, ALTER_USERSTATE } from "./types";

export const checkUser = (name, phone) => {
    return {
        type: CHECK_USER,
        name,
        phone,
    }
}

export const createTicket = (ticket) => {
    return {
        type: CREATE_TICKET,
        ticket
    }
}

export const alterUserState = (userState) => {
    return {
        type: ALTER_USERSTATE,
        userState
    }
}