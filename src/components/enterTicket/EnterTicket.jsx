import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { checkUser, alterUserState, createTicket, check, openList, navSwitch } from "../../store";
import CheckAll from "../checkBox/CheckAll";
import UnCheckAll from "../checkBox/UnCheckAll";
import CheckOne from "../checkBox/CheckOne";
import UnCheckOne from "../checkBox/UnCheckOne";
import ArrowRight from "../checkBox/ArrowRight";
import NavBar from "../navBar/NavBar";
import TermsList from "../termsList/TermsList";

const EnterTicket = ({ userState, ticket, info1, info2, infoAll, termsListState, alterUserState, createTicket, checkUser, check, openList, navSwitch, history }) => {

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [buttonState, setButtonState] = useState(!infoAll);

    useEffect(() => {
        setButtonState(!infoAll)
    }, [infoAll])

    useEffect(() => {
        navSwitch(true, false, '모바일 진찰권 등록', false)
    }, [])

    const onClickSubmit = () => {
        console.log(infoAll)
        checkUser(inputName, inputPhone)
        createTicket(!ticket)
        alterUserState(!userState)
        history.push('/')
    }

    const onChangeName = e => {
        setInputName(e.currentTarget.value.replace(/[^ㄱ-ㅎ | ㅏ - ㅣ | 가-힣]/g, ''))
    }

    const onChangePhone = e => {
        setInputPhone(e.currentTarget.value.replace(/[^0-9]/g, ''))
    }

    const onClickInfo1 = e => {
        if(!info1) openList(!termsListState, '개인정보 수집 및 이용에 대한 동의', '동의 암튼 동의임 그런거임')
        check(!info1, info2)
    }

    const onClickInfo2 = e => {
        if(!info2) openList(!termsListState, '모바일 진찰권 이용에 대한 동의', '동의 하는거임 암튼 하는거임')
        check(info1, !info2)
    }

    const onClickAll = e => {
        check(!infoAll, !infoAll)
    }

    return (
        <div className='create-ticket'>
            <div className='create-box'>
            <NavBar />
                <div className='text-box'>
                    <p>병원에서 발급한<br />환자정보를 등록해주세요.</p>
                </div>
                <div className='input-box'>
                    <input type='text' value={ inputName } onChange={ onChangeName } placeholder='이름을 입력하세요.' />
                    <input type='text' value={ inputPhone } onChange={ onChangePhone } placeholder='전화번호를 입력하세요.' />
                </div>
                <div className='terms-box'>
                    <div className='terms' onClick={ onClickInfo1 }>
                        { info1 ? <CheckOne /> : <UnCheckOne /> }
                        <p className='terms-text'>개인정보 수집 및 이용</p>
                        <ArrowRight />
                    </div>
                    <div className='terms' onClick={ onClickInfo2 }>
                        { info2 ? <CheckOne /> : <UnCheckOne /> }
                        <p className='terms-text'>모바일 진찰권 이용약관</p>
                        <ArrowRight />
                    </div>
                    <div className='line' />
                    <div className='terms terms-all' onClick={ onClickAll }>
                        { info1 && info2 ? <CheckAll /> : <UnCheckAll /> }
                        <div className='terms-text-box'>
                            <p>전체동의</p>
                            <p>모든 항목을 확인하였으며, 동의합니다.</p>
                        </div>
                    </div>
                </div>
                <div className='submit-button'>
                    <button onClick={ onClickSubmit } disabled={ buttonState }>확인</button>
                </div>
            </div>
            <div className='terms-list-box'>
                { termsListState && <TermsList /> }
            </div>
        </div>
    )
}

const mapToStateProps = ({ users, terms }) => {
    return {
        ticket: users.ticket,
        info1: terms.info1,
        info2: terms.info2,
        infoAll: terms.infoAll,
        termsListState: terms.termsListState,
        userState: users.userState
    }
}

const mapToDispatchProps = {
    createTicket: (ticket) => createTicket(ticket),
    checkUser: (name, phone) => checkUser(name, phone),
    alterUserState: (userState) => alterUserState(userState),
    check: (info1, info2) => check(info1, info2),
    openList: (termsListState, termsListTitle, termsListContent) => openList(termsListState, termsListTitle, termsListContent),
    navSwitch: (back, logo, logoText, menu) => navSwitch(back, logo, logoText, menu)
}

export default connect(mapToStateProps, mapToDispatchProps)(EnterTicket)