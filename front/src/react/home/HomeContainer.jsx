import React , {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import Home from './Home'
import { register } from '../../redux/action/users'

const HomeContainer = ({register}) =>{

    const [ input, setInput] = useState({});

    const handleSubmit = (event) =>{
        const data ={
            name:event.target[0].value,
            email:event.target[1].value,
            password:event.target[2].value
        }
        event.preventDefault();
        register(data)
        setInput({
            [event.target[0].name]:'',
            [event.target[1].name]:'',
            [event.target[2].name]:''
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
        />
    )

};

const mapDispacthToProps = (dispatch) => {
    return {
        register: (datos) => dispatch(register(datos))
    }
};


export default connect(null,mapDispacthToProps)(HomeContainer)