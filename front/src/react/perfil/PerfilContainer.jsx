import React from 'react';
import {connect} from 'react-redux';
import Perfil from './Perfil';

const PerfilContainer = ({profile}) =>{
    return (
        <Perfil profile={profile}/>
    )
};

const MapStateToProp = (state) =>{
    return {
        profile:state.users.data
    }
};

const MapDispatchProps = () => {
    return {

    }
};


export default connect(MapStateToProp, MapDispatchProps)(PerfilContainer)