import { combineReducers } from 'redux';
import users from './users';
import notas from './notas';

export default combineReducers({
    users,
    notas
});
