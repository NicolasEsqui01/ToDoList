import React , {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import Home from './Home'
import { withRouter } from 'react-router'
import { register } from '../../redux/action/users'

const HomeContainer = ({register , history}) =>{

    const [ input, setInput] = useState({});
    const [messageError , setMessageError] = useState('')

    const handleSubmit = (event) =>{
        const data ={
            name:event.target[0].value,
            email:event.target[1].value,
            password:event.target[2].value
        }
        event.preventDefault();
        register(data).then((res) => {
            if(res.status === 500){
                setMessageError(res.data)
            }else{
                return history.push('/login')
            }
        })
        
    };

    const handleChange = (event) => {
        setInput({[event.target.name]: event.target.value})
    };


    return (
        <Home 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        valor = {input}
        err={messageError}
        />
    )

};

const mapDispacthToProps = (dispatch) => {
    return {
        register: (datos) => dispatch(register(datos))
    }
};


export default withRouter(connect(null,mapDispacthToProps)(HomeContainer))