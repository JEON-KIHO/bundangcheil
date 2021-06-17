import React, { useEffect, useState } from "react";
import { useBarcode } from 'react-barcodes';
import { connect } from "react-redux";
import Barcode_bg from './sections/Barcode_bg';
import { barcodeLargeState } from "../../store";

const Barcode = ({ name, phone, barcodeLarge, barcodeLargeState }) => {

    useEffect(() => {
        console.log(window.innerWidth / 200)
        console.log(Math.floor(window.innerHeight / 13.5))
    }, [])

    const { inputRef } = useBarcode({
        value: phone,
        options: {
            background: 'none',
            width: (window.innerWidth / 200) + 0.5,
            height: Math.floor(window.innerHeight / 13.5),
            textAlign: 'left',
            textMargin: 10,
            fontSize: 14,
            margin: 20,
            fontOptions: 'bold'
        }
    });

    const onClick = e => {
        barcodeLargeState(!barcodeLarge)
    }

    return (
        <>
            <div className='barcode-sm' onClick={ onClick }>
                <svg ref={inputRef} />
                <img src='/mainPage/ic-mgnifier@3x.png' className='glass' alt='glass' />
            </div>
            { barcodeLarge && <Barcode_bg /> }
        </>
    )
}

const mapStateToProps = ({ users, barcode }) => {
    return {
        name: users.name,
        phone: users.phone,
        barcodeLarge: barcode.barcodeLarge
    }
}

const mapToDispatchProps = {
    barcodeLargeState: (barcodeLarge) => barcodeLargeState(barcodeLarge)
}

export default connect(mapStateToProps, mapToDispatchProps)(Barcode)