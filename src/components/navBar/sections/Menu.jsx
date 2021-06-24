import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { menuTabSwitch } from "../../../store";

const Menu = ({ menuTab, menuTabSwitch }) => {

    const onClick = e => {
        menuTabSwitch(!menuTab)
    }

    return (
        <>
            <img src='/nav/ic_menu.png' className='menu' onClick={ onClick } alt='' />
        </>
    )
}

const mapToStateProps = ({ menuTab }) => {
    return {
        menuTab: menuTab.menuTab
    }
}

const mapToDispatchProps = {
    menuTabSwitch: (menuTab) => menuTabSwitch(menuTab)
}

export default connect(mapToStateProps, mapToDispatchProps)(Menu)