import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkUser } from "../store";
import axios from "axios";

const Users = ({ checkUser, history }) => {

    const [userState, setUserState] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const onChangeName = (e) => {
        setInputName(e.target.value)
    }

    const onChangePhone = e => {
        setInputPhone(e.target.value)
    }

    const onClickButton = e => {
        const variable = {
            name: inputName,
            phone: inputPhone
        }

        axios.post('/v2/api/users/checkUser', variable)
            .then(res => {
                if(res.data.userState) {
                    const data = res.data
                    setUserState(res.data.userState)
                    checkUser(data.userState, data.phone, data.name)
                    history.push('/main')
                }
            })
    }

    return (
        <div>
            <input type='text' value={ inputName } onChange={ onChangeName } />
            <input type='text' value={ inputPhone } onChange={ onChangePhone } />
            <button type='button' onClick={ onClickButton }>button</button>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {

    }
}

const mapDispatchToProps = {
    checkUser : (userState, phone, name) => checkUser(userState, phone, name),
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)