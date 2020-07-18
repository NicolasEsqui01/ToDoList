import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'

const LoginContainer = () => {
    return (
        <Login/>
    )
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)