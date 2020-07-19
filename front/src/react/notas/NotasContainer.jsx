import React from 'react';
import {connect } from 'react-redux';
import Notas from './Notas';
import Navbar from '../nabvar/NavBarContainer';

const NotasContainer = () =>{

    return (
        <>
        <Navbar/>
        <Notas/>
        </>
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

export default connect(mapStateToprops,mapDispatchToProps)(NotasContainer)