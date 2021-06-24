import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { GridList } from "@material-ui/core";
import { Link } from 'react-router-dom';

const GridMenu = ({ history }) => {

    const onClickArrive = e => {
        history.push('/arrive')
    }

    const onClickNotice = e => {
        window.open('http://www.bundangcheil.com/bbs/board.php?bo_table=notice&wr_ca=m')
    }

    const onClickReservation = e => {
        window.open('http://www.bundangcheil.com/page/page.php?pg=checkreservation')
    }

    return (
        <>
            <GridList cols={4} cellHeight={100} style={{ margin: '0em' }}>
                <li onClick={ onClickArrive }>
                    <img src='/mainPage/ico_arrival.png' alt='' />
                    <p>도착확인 · 접수</p>
                </li>
                <li onClick={ onClickNotice }>
                    <img src='/mainPage/ico_notice.png' alt='' />
                    <p>병원공지</p>
                </li>
                <li onClick={ onClickReservation }>
                    <img src='/mainPage/ico_reservation.png' alt='' />
                    <p>예약확인</p>
                </li>
            </GridList>
        </>
    )
}

export default withRouter(GridMenu)