import React , { useEffect } from 'react';
import { Switch , Route} from 'react-router'
import { persistencia } from '../redux/action/users'
import { connect } from 'react-redux';
import HomeContainer from './home/HomeContainer'
import LoginContainer from './login/LoginContainer'

const Main = ({persistencia}) =>{

    // useEffect(()=> {
    //     persistencia()
    // },[])

    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
                <Route exact path='/login' component={LoginContainer}/>
            </Switch>
        </div>
    )
};
 
const mapDispacthToProps = (dispatch) =>{
    return {
        persistencia : () => dispatch(persistencia())
    }
};

export default connect(null, mapDispacthToProps)(Main); 