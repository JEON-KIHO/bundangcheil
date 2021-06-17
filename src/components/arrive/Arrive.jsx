import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import DiagBox from './sections/DiagBox';
import ArriveCheck from './sections/ArriveCheck';

const Arrive = ({  }) => {

    const [state, setState] = useState(false)

    const onClick = e => {
        setState(!state)
    }

    return (
        <>
            <NavBar />
            <div className='diag-wrap'>
                <div className='diag-box-wrap'>
                    <DiagBox success={ true } />
                    <DiagBox />
                    <DiagBox />
                    <DiagBox />
                    <DiagBox />
                    <DiagBox />
                    <DiagBox />
                </div>
                <button onClick={ onClick }>도착확인</button>
            </div>
            { state && <ArriveCheck /> }
        </>
    )
}

export default Arrive