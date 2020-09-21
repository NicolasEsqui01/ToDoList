import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import { withRouter } from "react-router";
import { register } from "../../redux/action/users";
import { isValidEmail, isValidPass, isValidName } from '../../assets/validaciones'

const HomeContainer = ({ register, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [ nameError , setNameError] = useState(false)
  const [ emailError , setEmailError] = useState(false)
  const [ passwordError , setPasswordError] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    };
    register(data).then(res => {
      if (res.status === 500) {
        setMessageError(res.data);
      } else {
        return history.push("/login");
      }
    });
  };

  const handleChange = event => {
    switch (event.target.name) {
      case "name" :
        setNameError(isValidName(event.target.value))
        return setName(event.target.value) ;
      case "email":
        setEmailError(isValidEmail(event.target.value))
        return setEmail(event.target.value);
      case "password" :
        setPasswordError(isValidPass(event.target.value))
        return setPassword(event.target.value);
    }
  };

  const borrar = () => {
    setMessageError("");
  };
  return (
    <Home
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      err={messageError}
      email={email}
      name={name}
      password={password}
      borrar={borrar}
      nameError={nameError}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};

const mapDispacthToProps = dispatch => {
  return {
    register: datos => dispatch(register(datos))
  };
};

export default withRouter(connect(null, mapDispacthToProps)(HomeContainer));
