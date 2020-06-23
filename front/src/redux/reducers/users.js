import { SET_USERS } from '../constants';

const stateInicial = {
    data:{}
};

export default (state = stateInicial , action) => {
    switch(action.type){
        case SET_USERS :
            return {...state , data: action.user}
        default :
            return state
    }
};
