import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Barcode from "../../barcode/Barcode";
import { createTicket } from "../../../store";

const DivTop = ({ userName, userPhone, createTicket, history }) => {

    const [userInfo, setUserInfo] = useState(userName && userPhone)

    useEffect(() => {
        setUserInfo(userName && userPhone)
    }, [userName && userPhone])

    const onClick = () => {
        createTicket(true)
        history.push('/enterTicket')
    }

    const renderFalse = () => {
        return <>
            <div className='div-top-text'>
                <p>환자·의료·생명이 제일인 병원</p>
                <p>분당제일여성병원입니다.</p>
            </div>
            <div className='div-top-button'>
                <p>서비스를 이용하시려면<br />모바일 진찰권을 등록해주세요.</p>
                <button className='create-ticket-button' onClick={ onClick }>모바일 진찰권 등록</button>
            </div>
        </>
    }

    const renderTrue = () => {
        return <>
            <div className='div-top-text'>
                <p>안녕하세요. { userName }님</p>
                <p>오늘도 즐거운 하루 되세요!</p>
            </div>
            <Barcode />
        </>
    }

    return (
        <>
            <div className='div-top'>
                <img src='/mainPage/bg-greeting@3x.png' alt='bgimg' className='bg-img' />
                {userInfo ?
                    renderTrue() :
                    renderFalse()
                }
            </div>
        </>
    )
}

const mapToStateProps = ({ users }) => {
    return {
        userName: users.name,
        userPhone: users.phone
    }
}

const mapToDispatchProps = {
    createTicket: (ticket) => createTicket(ticket)
}

export default connect(mapToStateProps, mapToDispatchProps)(withRouter(DivTop))