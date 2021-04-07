import React , { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import { login as setLogin} from '../../redux/action/users'
import { withRouter } from 'react-router'

const LoginContainer = ({login , history}) => {

    const [ data , setData ] = useState({});
    const [messageErr , setMessageErr] = useState('');
    const [ bool, setBool ] = useState(false);

    console.log(data)

    useEffect(() => {
        if(data['email'] && data['email'] === ''){
            setMessageErr("Tenes que completar el campo email");
        }else {
            if(data['password'] && data['password'] === ''){
                setMessageErr('Tenes que completar el campo password');
            }else return;        
        }
    }, [bool]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        const data = {
            [event.target[0].name] :event.target[0].value,
            [event.target[1].name]:event.target[1].value
        };

        if(event.target[0].value !== '' && event.target[1].value !== ''){
            login(data).then( res =>{
                if(res.status === 401){
                    res.data = 'Email or Password are incorrect'
                    setMessageErr(res.data)
                }else{
                    return history.push('/notas')
                }
            });
        }else {    
            if(event.target[0].name === ''){
                setBool(!bool);
                setMessageErr("Tenes que completar el campo email");
                return;
            }else {
                setBool(!bool);
                setMessageErr('Tenes que completar el campo password');
                return;
            };
        };
    };

    const handleChange = (event) =>{
        setData({[event.target.name]:event.target.value})
    };


    return (
        <Login
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            err={messageErr}
            booleano={bool}
        />
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        login:(data) => dispatch(setLogin(data))
    };
};

export default withRouter(connect(null,mapDispatchToProps)(LoginContainer))