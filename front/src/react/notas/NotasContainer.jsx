import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Notas from "./Notas";
import { setNotas, getNotas, DeleteNotas, vaciarSearch } from "../../redux/action/notas";

const NotasContainer = ({
  setNotas,
  getNotas,
  notas,
  DeleteNotas,
  search,
  vaciarSearch,
}) => {
  const [ title, setTitle] = useState("");
  const [ description, setDescription] = useState("");
  const [ booleano, setBooleano] = useState(false);
  const [ activar , setActivar] = useState(0);
  const [ idNota , setIdNota] = useState('')

  useEffect(() => {
    if (!booleano || booleano) {
      getNotas();
    }
  }, [booleano]);


  const handleSubmit = event => {
    event.preventDefault();
    const DateNotas = {
      title: event.target[0].value,
      nota: event.target[1].value
    };
    setNotas(DateNotas).then(() => {
      setTitle("");
      setDescription("");
      return getNotas();
    });
  };

  const handleChange = event => {
    switch (event.target.name) {
      case "title":
        return setTitle(event.target.value);
      case "description":
        return setDescription(event.target.value);
    }
  };

  const handleDelete = id => {
    DeleteNotas(id).then(() => {
      return setBooleano(!booleano);
    });
  };

  // Modificar no quedo bien del todo.
  const handleElinacion = id => {
    const datos = search.filter(element => element.id !== id);
    const eliminado = search.filter(element => element.id === id);
    if(datos.length){
        DeleteNotas(eliminado[0].id).then(() => {
            setBooleano(!booleano)
        });
    }else{
        DeleteNotas(eliminado[0].id).then(() => {
            setBooleano(!booleano)
            vaciarSearch()
        })
    }
  };

  const handleActivar = (num,element) => {
    setActivar(num)
    setIdNota(element)
  };  

  return (
    <Notas
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      title={title}
      description={description}
      notas={notas}
      handleDelete={handleDelete}
      search={search}
      handleElinacion={handleElinacion}
      handleActivar={handleActivar}
      activar={activar}
      idNota={idNota}
      booleano={setBooleano}
      bool={booleano}
    />
  );
};

const mapStateToprops = state => {
  return {
    notas: state.notas.notasUser,
    search: state.notas.setSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNotas: obj => dispatch(setNotas(obj)),
    getNotas: () => dispatch(getNotas()),
    DeleteNotas: id => dispatch(DeleteNotas(id)),
    vaciarSearch: () => dispatch(vaciarSearch()),
    SearchDelete: (array) => dispatch(SearchDelete(array))

  };
};

export default withRouter(
  connect(mapStateToprops, mapDispatchToProps)(NotasContainer)
);
