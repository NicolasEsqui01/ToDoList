import React , { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import { login as setLogin} from '../../redux/action/users'

const LoginContainer = ({login}) => {

    const [ data , setData ] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault()
        const data = {
            email:event.target[0].value,
            password:event.target[1].value
        }
        login(data).then((x)=>{
            console.log(x)
        })
    };

    const handleChange = (event) =>{
        setData({[event.target.name]:event.target.value})
    };


    return (
        <Login
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    )
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login:(data) => dispatch(setLogin(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)