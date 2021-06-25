import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavBar from '../navBar/NavBar';
import DiagBox from './sections/DiagBox';
import ArriveCheck from './sections/ArriveCheck';
import { navSwitch } from '../../store';

const Arrive = ({ navSwitch }) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        navSwitch(true, false, '도착확인·접수', false)    
    }, [])

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

const mapToStateProps = ({ nav }) => {
    return {

    }
}

const mapToDispatchProps = {
    navSwitch: (back, logo, logoText, menu) => navSwitch(back, logo, logoText, menu),
}

export default connect(mapToStateProps, mapToDispatchProps)(Arrive)