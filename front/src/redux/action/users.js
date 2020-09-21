import { SET_USERS } from "../constants";
import axios from "axios";

const { PORT = 3000 } = process.env;

const getUser = user => {
  return {
    type: SET_USERS,
    user
  };
};

export const register = datos => {
  return dispatch => {
    return axios
      .post(`http://localhost:${PORT}/api/user/register`, datos, {
        withCredentials: true
      })
      .catch(err => {
        return err.response;
      });
  };
};

export const persistencia = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:${PORT}/api/user/persistencia`, {
        withCredentials: true
      })
      .then(res => dispatch(getUser(res.data)));
  };
};

export const login = datos => {
  return dispatch => {
    return axios
      .post(`http://localhost:${PORT}/api/user/login`, datos, {
        withCredentials: true
      })
      .then(res => dispatch(getUser(res.data)))
      .catch(err => {
        return err.response;
      });
  };
};

export const Logout = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:${PORT}/api/user/logout`, {
        withCredentials: true
      })
      .then(res => {
        dispatch(getUser({}));
      });
  };
};

export const UpdateImg = obj => {
  return dispatch => {
    return axios.put(`http://localhost:${PORT}/api/user/img`, obj, {
      withCredentials: true
    });
  };
};
