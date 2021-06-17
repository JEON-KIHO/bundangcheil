import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

const BackButton = ({ history }) => {

    const onClick = e => {
        history.goBack()
    }

    return (
        <>
            <img src='/nav/arrowBack.png' className='arrow-back' alt='back' onClick={ onClick } />
        </>
    )
}

export default withRouter(BackButton)