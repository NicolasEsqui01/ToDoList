import { SET_USERS } from '../constants';

const getUser = (user) =>{
    return {
        type:SET_USERS,
        user
    }
};


