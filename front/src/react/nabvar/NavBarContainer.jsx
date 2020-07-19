import React from 'react';
import { connect } from 'react-redux';
import Navbar from './NavBar';

const NavbarContainer = () =>{


    return (
        <Navbar/>
    )
};

const mapStateToProps = (state) =>{
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};


export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer)
