import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Popup from "./PopUp";
import { getIdNotas, updateNotas } from "../../redux/action/notas";

const PopupContainer = ({
  start,
  handleActivar,
  idNota,
  getIdNotas,
  updateNotas,
  booleano,
  bool
}) => {
  const [title, setTitle] = useState("");
  const [nota, setNota] = useState("");

  useEffect(() => {
    getIdNotas(idNota).then(res => {
      setTitle(res.nota.title);
      setNota(res.nota.nota);
    });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const date = {
      title: event.target[0].value,
      nota: event.target[1].value
    };
    updateNotas(idNota, date).then(() => {
      handleActivar(0);
      booleano(!bool);
    });
  };

  const handleChange = event => {
    switch (event.target.name) {
      case "title":
        return setTitle(event.target.value);
      case "nota":
        return setNota(event.target.value);
    }
  };
  return (
    <Popup
      start={start}
      handleActivar={handleActivar}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      title={title}
      nota={nota}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getIdNotas: id => dispatch(getIdNotas(id)),
    updateNotas: (id, obj) => dispatch(updateNotas(id, obj))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(PopupContainer));
