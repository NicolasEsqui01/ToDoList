import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import { persistencia as setPersistencia } from "../redux/action/users";
import { connect } from "react-redux";

import HomeContainer from "./home/HomeContainer";
import LoginContainer from "./login/LoginContainer";
import NotasContainer from "./notas/NotasContainer";
import NabvarContainer from "./nabvar/NavBarContainer";
import PerfilContainer from './perfil/PerfilContainer';

const Main = ({ persistencia, location }) => {
  useEffect(() => {
    persistencia();
  }, []);
  return (
    <div>
        
      {location.pathname !== "/" && location.pathname !== "/login" ? (
        <NabvarContainer />
      ) : null}

      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/notas" component={NotasContainer} />
        <Route path='/perfil' component={PerfilContainer}/> 
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = dispatch => {
  return {
    persistencia: () => dispatch(setPersistencia())
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Main);
