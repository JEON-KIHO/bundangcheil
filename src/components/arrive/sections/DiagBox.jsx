import React, { useEffect, useState } from 'react';

const DiagBox = ({ success }) => {
    return (
        <>
            <div className={ success ? 'diag-box true' : 'diag-box' }>
                <div className='diag-data-wrap'>
                    <div className='diag-text-box'>
                        <div className='text'>
                            <p>진료과</p>
                            <p>소화기 내과</p>
                        </div>
                        <div className='text'>
                            <p>진료의사</p>
                            <p>한동성 교수</p>
                        </div>
                        <div className='text'>
                            <p>예약시간</p>
                            <p>2021년 04월 16일 09:30</p>
                        </div>
                    </div>
                    <div className='diag-stamp-box'>
                        { success ?
                        <img src='/diagBox/btn-check-arrival@3x.png' className='diag-stamp' alt='' /> :
                        <img src='/diagBox/btn-check-gray@3x.png' className='diag-stamp' alt='' />
                        }
                    </div>
                </div>
                { success && <div className='diag-success'>문진안내를 위하여<br />번호표를 발행하여 주십시오.</div> }
            </div>
        </>
    )
}

export default DiagBox