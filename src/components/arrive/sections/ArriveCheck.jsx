import React, { useEffect, useState } from 'react';

const ArriveCheck = ({  }) => {
    return (
        <>
        <div className='checked-wrap'>
            <div className='checked-bg'>
                <div className='checked-box'>
                    <p className='text-1'>도착확인</p>
                    <img src='/mainPage/ico_arrival.png' className='check-img' alt='' />
                    <p className='text-2'>도착확인을 하시겠습니까?</p>
                    <div className='button-box'>
                        <button>취소</button>
                        <button>도착확인</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ArriveCheck