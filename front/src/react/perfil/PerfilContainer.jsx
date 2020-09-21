import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Perfil from './Perfil';
import { UpdateImg } from '../../redux/action/users'

const PerfilContainer = ({ profile, UpdateImg}) =>{

    const [ booleano, setBooleano ] = useState(false);

    useEffect(() =>{
        if(!booleano || booleano){

        };
    },[booleano])


    const handleSubmit = (event) => {
        event.preventDefault();
        const date = {
            img:event.target[0].files[0].name
        } 
        UpdateImg(date).then(() => {
            return setBooleano(!booleano)
        });
    };


    return (
        <Perfil 
            profile={profile}
            handleSubmit={handleSubmit}
        />
    )
};

const MapStateToProp = (state) =>{
    return {
        profile:state.users.data
    }
};

const MapDispatchProps = (dispatch) => {
    return {
        UpdateImg:(obj) => dispatch(UpdateImg(obj))
    }
};


export default connect(MapStateToProp, MapDispatchProps)(PerfilContainer)