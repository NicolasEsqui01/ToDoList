import React from 'react';
import {connect } from 'react-redux';
import Notas from './Notas';


const NotasContainer = () =>{




    return (
        <Notas/>
    )
};



const mapStateToprops = (state) => {
    return {

    };
};


const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToprops,mapStateToprops)(NotasContainer)