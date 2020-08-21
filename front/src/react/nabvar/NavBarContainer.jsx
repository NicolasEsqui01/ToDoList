import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "./NavBar";
import { getSearchNotas , vaciarSearch } from "../../redux/action/notas";
import { Logout } from "../../redux/action/users";
import { withRouter } from "react-router-dom";

const NavbarContainer = ({ getSearchNotas, history, Logout, vaciarSearch }) => {
  const [search, setSearch] = useState("");
  const [ejecutar, setEjecutar] = useState(0);

  const handleChange = event => {
    const data = event.target.value;
    if(data){
      setSearch(data)
      getSearchNotas(data)
    }else{
      setSearch(data)
      vaciarSearch()
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    getSearchNotas(event.target[0].value).then(data => {
      return setSearch(data);
    });
  };

  const handleClick = () => {
    if (ejecutar === 0) {
      setEjecutar(1);
    } else {
      setEjecutar(0);
    }
  };

  const handlePerfil = () => {
    setEjecutar(0)
    return history.push("/perfil");
  };

  const handleLogout = () => {
    Logout().then(() => history.push("/login"));
  };

  const handleImage = () => {
    return history.push('/notas')
  };

  return (
    <Navbar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      search={search}
      handleClick={handleClick}
      valor={ejecutar}
      handlePerfil={handlePerfil}
      handleLogout={handleLogout}
      handleImage={handleImage}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchNotas: busqueda => dispatch(getSearchNotas(busqueda)),
    Logout: () => dispatch(Logout()),
    vaciarSearch: () => dispatch(vaciarSearch())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NavbarContainer));
