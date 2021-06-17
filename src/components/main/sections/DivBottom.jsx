import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GridMenu from "./GridMenu";
import Notice from './Notice';

const DivBottom = ({ userState }) => {

    useEffect(() => {
        console.log('divbottom',userState)
    }, [])

    return (
        <div className='grid-menu'>
            { userState ?
            <GridMenu /> :
            <Notice />
        }
        </div>
    )
}

const mapToStateProps = ({ users }) => {
    return {
        userState: users.userState
    }
}

const mapToDispatchProps = {

}

export default connect(mapToStateProps, mapToDispatchProps)(DivBottom)