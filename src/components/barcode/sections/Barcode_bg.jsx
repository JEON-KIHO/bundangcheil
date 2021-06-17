import React, { useEffect, useState } from "react";
import Barcode_lg from "./Barcode_lg";
import { connect } from "react-redux";
import { barcodeLargeState } from "../../../store";

const Barcode_bg = ({ barcodeLarge, barcodeLargeState }) => {

    const [phone, setPhone] = useState('01022712202')
    const [name, setName] = useState('전기호')

    const onClick = e => {
        barcodeLargeState(!barcodeLarge)
    }

    return (
        <div className='barcode-bg'>
            <div className='barcode-back'>
                <div className='barcode-front'>
                    <div className='barcode-box'>
                        <Barcode_lg phone={ phone } name={ name } />
                    </div>
                    <div className='close' onClick={ onClick }>
                        <img src='/mainPage/barcode_lg/ico_close.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapToStateProps = ({ barcode }) => {
    return {
        barcodeLarge: barcode.barcodeLarge
    }
}

const mapToDispatchProps = {
    barcodeLargeState: (barcodeLarge) => barcodeLargeState(barcodeLarge)
}

export default connect(mapToStateProps, mapToDispatchProps)(Barcode_bg)