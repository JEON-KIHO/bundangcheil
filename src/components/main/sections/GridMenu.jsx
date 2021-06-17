import React, { useEffect, useState } from 'react';

import { GridList } from "@material-ui/core";

const GridMenu = ({  }) => {
    return (
        <>
            <GridList cols={4} cellHeight={100} style={{ margin: '0em' }}>
                <li>
                    <img src='/mainPage/ico_arrival.png' alt='' />
                    <p>도착확인 · 접수</p>
                </li>
                <li>
                    <img src='/mainPage/ico_notice.png' alt='' />
                    <p>병원공지</p>
                </li>
                <li>
                    <img src='/mainPage/ico_reservation.png' alt='' />
                    <p>예약확인</p>
                </li>
            </GridList>
        </>
    )
}

export default GridMenu