import React , { useEffect } from 'react';
import { Switch , Route} from 'react-router'
import { persistencia as setPersistencia} from '../redux/action/users'
import { connect } from 'react-redux';

import HomeContainer from './home/HomeContainer';
import LoginContainer from './login/LoginContainer';
import NotasContainer from './notas/NotasContainer';

const Main = ({persistencia}) =>{

    useEffect(()=> {
        persistencia()
    },[])

    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
                <Route exact path='/login' component={LoginContainer}/>
                <Route exact path='/notas' component={NotasContainer}/>
            </Switch>
        </div>
    )
};
 
const mapDispacthToProps = (dispatch) =>{
    return {
        persistencia : () => dispatch(setPersistencia())
    }
};

export default connect(null, mapDispacthToProps)(Main); 