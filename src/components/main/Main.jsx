import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { navSwitch, menuTabSwitch } from "../../store";

import DivTop from "./sections/DivTop";
import DivBottom from "./sections/DivBottom";
import NavBar from '../navBar/NavBar';
import MenuTab from '../menuTab/MenuTab';
import Arrive from "../arrive/Arrive";
import Setting from '../setting/Setting';

const Main = ({ userState, menuTab, navSwitch, menuTabSwitch }) => {

    useEffect(() => {
        navSwitch(false, true, '', userState)
    }, [userState])

    useEffect(() => {
        menuTabSwitch(menuTab)
    }, [MenuTab])

    return (
        <>
            <NavBar />
            <DivTop />
            <DivBottom />
            { menuTab && <MenuTab /> }
            {/* <Arrive /> */}
            {/* <Setting /> */}
        </>
    )
}

const mapStateToProps = ({ users, menuTab }) => {
    return {
        userState: users.userState,
        menuTab: menuTab.menuTab
    }
}

const mapToDispatchProps = {
    navSwitch: (back, logo, logoText, menu) => navSwitch(back, logo, logoText, menu),
    menuTabSwitch: (menuTab) => menuTabSwitch(menuTab)
}

export default connect(mapStateToProps, mapToDispatchProps)(Main)