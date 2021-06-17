import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { navSwitch } from "../../store";

import DivTop from "./sections/DivTop";
import DivBottom from "./sections/DivBottom";
import Arrive from "../arrive/Arrive";

const Main = ({ userState, navSwitch }) => {

    useEffect(() => {
        navSwitch(false, true, '', userState)
    }, [userState])

    return (
        <>
            {/* <DivTop /> */}
            {/* <DivBottom /> */}
            <Arrive />
        </>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        userState: users.userState
    }
}

const mapToDispatchProps = {
    navSwitch: (back, logo, logoText, menu) => navSwitch(back, logo, logoText, menu)
}

export default connect(mapStateToProps, mapToDispatchProps)(Main)