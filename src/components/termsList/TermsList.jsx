import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { openList, backSwitch } from '../../store';

const TermsList = ({ termsListState, termsListTitle, termsListContent, openList, backSwitch }) => {

    useEffect(() => {
        backSwitch(false)
    }, [])

    const onClick = e => {
        backSwitch(true)
        openList(!termsListState, '', '')
    }

    return (
        <div className='terms-list'>
            <p>{ termsListTitle }</p>
            <p>{ termsListContent }</p>
            <button onClick={ onClick }>확인</button>
        </div>
    )
}

const mapToStateProps = ({ terms, nav }) => {
    return {
        termsListState: terms.termsListState,
        termsListTitle: terms.termsListTitle,
        termsListContent: terms.termsListContent,
        back: nav.back
    }
}

const mapToDispatchProps = {
    openList: (termsListState, termsListTitle, termsListContent) => openList(termsListState, termsListTitle, termsListContent),
    backSwitch: back => backSwitch(back)
}

export default connect(mapToStateProps, mapToDispatchProps)(TermsList)