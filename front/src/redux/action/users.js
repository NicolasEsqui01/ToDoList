import { SET_USERS } from '../constants';
import Axios from 'axios'

const getUser = (user) =>{
    return {
        type:SET_USERS,
        user
    }
};

export const register = (datos) =>{
    return dispacth => {
        return Axios.post('/api/user/register', datos)
    };
};

export const persistencia = () =>{
    return dispacth => {
        return Axios.get('/api/user/persistencia')
    };
};




