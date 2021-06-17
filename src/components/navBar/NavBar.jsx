import React, { useEffect } from "react";
import { connect } from "react-redux";
import BackButton from "./sections/BackButton";
import Logo from "./sections/Logo";
import Menu from "./sections/Menu";

const NavBar = ({ back, logo, logoText, menu }) => {
    return (
        <div className='nav-bar'>
            { back && <BackButton /> }
            { logo ?
                <Logo /> :
                <p className='nav-text'>{ logoText }</p>
            }
            { menu && <Menu /> }
        </div>
    )
}

const mapToStateProps = ({ nav }) => {
    return {
        back: nav.back,
        logo: nav.logo,
        logoText: nav.logoText,
        menu: nav.menu
    }
}

export default connect(mapToStateProps)(NavBar)