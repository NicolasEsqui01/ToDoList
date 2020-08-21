import {
  ALL_NOTAS,
  SEARCH_NOTAS,
  VACIAR_SEARCH,
} from "../constants";
import axios from "axios";

const { PORT = 3000 } = process.env

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

const getSearchNotas = name => dispatch => {
  return axios.get(`http://localhost:${PORT}/api/notas/search?name=${name}`).then(res => {
    return dispatch(SearchNotas(res.data));
  });
};

const setNotas = objeto => dispatch => {
  return axios.post(`http://localhost:${PORT}/api/notas/newNota`, objeto);
};

const getNotas = () => dispatch => {
  return axios.get(`http://localhost:${PORT}/api/notas`).then(res => {
    return dispatch(AllNotas(res.data));
  });
};

const DeleteNotas = id => dispatch => {
  return axios.delete(`http://localhost:${PORT}/api/notas/${id}`);
};

export { setNotas, getNotas, DeleteNotas, getSearchNotas, vaciarSearch };
