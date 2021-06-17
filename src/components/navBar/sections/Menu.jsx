import React, { useEffect, useState } from "react";
import MenuTab from "../../menuTab/MenuTab";

const Menu = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    const onClick = e => {
        // setMenuClicked(!menuClicked)
    }

    return (
        <>
            <img src='/nav/ic_menu.png' className='menu' onClick={ onClick } alt='' />
            { menuClicked && <MenuTab /> }
        </>
    )
}

export default Menu