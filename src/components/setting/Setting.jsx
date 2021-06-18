import React, { useEffect, useState } from 'react';

const Setting = ({  }) => {
    return (
        <>
            <div className='setting-wrap'>
                <div className='setting-info-box'>
                    <p>개인 기본 정보</p>
                    <div className='info-box'>
                        <input type='text' placeholder='이름' />
                        <input type='text' placeholder='전화번호' />
                    </div>
                </div>
                <div className='setting-version-box'>
                    <p>기타</p>
                    <div className='app-version'>
                        <div className='app-version-text'>
                            <p>앱 버전 정보(1.2.1)</p>
                            <p>최신 버전으로 업데이트해주세요.</p>
                        </div>
                        <button>업데이트</button>
                    </div>
                </div>
                <div className='setting-button-box'>
                    <button>확인</button>
                </div>
            </div>
        </>
    )
}

export default Setting