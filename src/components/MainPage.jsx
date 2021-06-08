import React, { useEffect, useState } from "react";
import { useBarcode } from 'react-barcodes';
import { connect } from "react-redux";

const MainPage = ({ phone, name }) => {

    const { inputRef } = useBarcode({
        value: phone,
        options: {
            background: '#fff',
            width: 2,
            height: 100,
            textAlign: 'left',
            textMargin: 10,
            fontSize: 20,
            margin: 20,
            fontOptions: 'bold'
        }
    });

    return (
        <div>
            <p>{ name }</p>
            <svg ref={inputRef} />
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        phone: users.phone,
        name: users.name
    }
}

export default connect(mapStateToProps)(MainPage)