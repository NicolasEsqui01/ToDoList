import { ALL_NOTAS, SEARCH_NOTAS, VACIAR_SEARCH, ID_NOTA } from "../constants";
import axios from "axios";

const { PORT = 3000 } = process.env;

const AllNotas = notas => {
  return {
    type: ALL_NOTAS,
    notas
  };
};

const SearchNotas = notas => {
  return {
    type: SEARCH_NOTAS,
    notas
  };
};

const vaciarSearch = () => {
  return {
    type: VACIAR_SEARCH
  };
};

const idNotas = nota => {
  return {
    type: ID_NOTA,
    nota
  };
};

const getSearchNotas = name => dispatch => {
  return axios
    .get(`http://localhost:${PORT}/api/notas/search?name=${name}`, {
      withCredentials: true
    })
    .then(res => {
      return dispatch(SearchNotas(res.data));
    });
};

const setNotas = objeto => dispatch => {
  return axios.post(`http://localhost:${PORT}/api/notas/newNota`, objeto, {
    withCredentials: true
  });
};

const getNotas = () => dispatch => {
  return axios
    .get(`${PORT}/api/notas`, {
      withCredentials: true
    })
    .then(res => {
      return dispatch(AllNotas(res.data));
    });
};

const DeleteNotas = id => dispatch => {
  return axios.delete(`${PORT}/api/notas/${id}`, {
    withCredentials: true
  });
};

const updateNotas = (id, obj) => dispatch => {
  return axios.put(`${PORT}/api/notas/${id}`, obj, {
    withCredentials: true
  });
};

const getIdNotas = id => dispatch => {
  return axios
    .get(`${PORT}/api/notas/${id}`, {
      withCredentials: true
    })
    .then(res => dispatch(idNotas(res.data)));
};

export {
  setNotas,
  getNotas,
  DeleteNotas,
  getSearchNotas,
  vaciarSearch,
  getIdNotas,
  updateNotas
};
