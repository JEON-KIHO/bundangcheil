import React, { useEffect, useState } from "react";
import { useBarcode } from 'react-barcodes';

const Barcode_lg = ({ phone, name }) => {

    const { inputRef } = useBarcode({
        value: phone,
        options: {
            background: '#fff',
            width: 3.5,
            height: 90,
            // textPosition: 'top',
            // textAlign: 'right',
            // textMargin: 10,
            // fontSize: 20,
            margin: 20,
            // fontOptions: 'bold',
            displayValue: false,
        }
    });

    return (
        <>
            <div className='barcode'>
                <div className='barcode-info'>
                    <p className='name'>{ name } 님</p>
                    <p className='phone'>{ phone }</p>
                </div>
                <svg ref={inputRef} className='barcode-img' />
                <img src='/nav/hi.png' className='logo' />
            </div>
        </>
    )
}

export default Barcode_lg