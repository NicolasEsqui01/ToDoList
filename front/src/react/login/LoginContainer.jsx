import React , { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import { login as setLogin} from '../../redux/action/users'
import { withRouter } from 'react-router'

const LoginContainer = ({login , history}) => {

    const [ data , setData ] = useState({})
    const [messageErr , setMessageErr] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        
        const data = {
            email:event.target[0].value,
            password:event.target[1].value
        }

        login(data).then( res =>{
            if(res.status === 401){
                res.data = 'Email or Password are incorrect'
                setMessageErr(res.data)
            }else{
                return history.push('/notas')
            }
        });

    };

    const handleChange = (event) =>{
        setData({[event.target.name]:event.target.value})
    };


    return (
        <Login
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            err={messageErr}
        />
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        login:(data) => dispatch(setLogin(data))
    };
};

export default withRouter(connect(null,mapDispatchToProps)(LoginContainer))