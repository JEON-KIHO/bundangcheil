import React, { useEffect, useState } from 'react';

const MenuTab = ({ history }) => {

    const onClick = e => {
        
    }

    return (
        <div className='menu-tab'>
            <div className='menu-box'>
                <div className='menu-text-box'>
                    <div className='menu-text'>
                        <p>김제연님</p>
                        <p>오늘도 건강한 하루 되세용 ㅎㅎ</p>
                    </div>
                    <div className='circle'>
                        <div className='big-one' />
                        <div className='small-one' />
                    </div>
                </div>
                <div className='menu-line' />
                <ul className='menu-list'>
                    <li><img src='/menuTab/ico-notice@3x.png' alt='' />공지사항</li>
                    <li><img src='/menuTab/ico-way@3x.png' alt='' />오시는 길</li>
                    <li><img src='/menuTab/ico-setting@3x.png' alt='' />설정</li>
                </ul>
                <img src='/checkBox/arrowRight.png' className='arrow-right' onClick={ onClick } alt='' />
            </div>
        </div>
    )
}

export default MenuTab