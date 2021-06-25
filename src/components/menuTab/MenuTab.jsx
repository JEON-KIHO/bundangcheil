import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { menuTabSwitch } from '../../store';

const MenuTab = ({ name, menuTab, menuTabSwitch, history }) => {

    const onClickBack = e => {
        menuTabSwitch(!menuTab)
    }

    const onClickNotice = e => {
        window.open('http://www.bundangcheil.com/bbs/board.php?bo_table=notice&wr_ca=m')
    }

    const onClickMap = e => {
        window.open('http://www.bundangcheil.com/page/page.php?pg=location')
    }

    const onClickSetting = e => {
        history.push('/setting')
    }

    return (
        <div className='menu-tab'>
            <div className='menu-box'>
                <div className='menu-text-box'>
                    <div className='menu-text'>
                        <p>{name}님</p>
                        <p>오늘도 건강한 하루 되세용 ㅎㅎ</p>
                    </div>
                    <div className='circle'>
                        <div className='big-one' />
                        <div className='small-one' />
                    </div>
                </div>
                <div className='menu-line' />
                <ul className='menu-list' onClick={ onClickBack }>
                    <li onClick={ onClickNotice }><img src='/menuTab/ico-notice@3x.png' alt='' />공지사항</li>
                    <li onClick={ onClickMap }><img src='/menuTab/ico-way@3x.png' alt='' />오시는 길</li>
                    <li onClick={ onClickSetting }><img src='/menuTab/ico-setting@3x.png' alt='' />설정</li>
                </ul>
                <img src='/checkBox/arrowRight.png' className='arrow-right' onClick={ onClickBack } alt='' />
            </div>
        </div>
    )
}

const mapToStateProps = ({ menuTab, users }) => {
    return {
        menuTab: menuTab.menuTab,
        name: users.name,
    }
}

const mapToDispatchProps = {
    menuTabSwitch: (menuTab) => menuTabSwitch(menuTab)
}

export default connect(mapToStateProps, mapToDispatchProps)(withRouter(MenuTab))