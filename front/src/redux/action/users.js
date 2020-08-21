import { SET_USERS } from "../constants";
import axios from "axios";

const { PORT = 3000 } = process.env

const getUser = user => {
  return {
    type: SET_USERS,
    user
  };
};

export const register = datos => {
  return dispatch => {
    return axios.post(`http://localhost:${PORT}/api/user/register`, datos).catch(err => {
      return err.response;
    });
  };
};

export const persistencia = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:${PORT}/api/user/persistencia`)
      .then(res => dispatch(getUser(res.data)));
  };
};

export const login = datos => {
  return dispatch => {
    return axios
      .post(`http://localhost:${PORT}/api/user/login`, datos)
      .then(res => dispatch(getUser(res.data)))
      .catch(err => {
        return err.response;
      });
  };
};

export const Logout = () => {
  return dispatch => {
    return axios.get(`http://localhost:${PORT}/logout`).then((res) => {
      dispatch(getUser({}))
    })
  };
}
