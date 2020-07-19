import { SET_USERS } from "../constants";
import axios from "axios";

const getUser = user => {
  return {
    type: SET_USERS,
    user
  };
};

export const register = datos => {
  return dispacth => {
    return axios.post("/api/user/register", datos).catch(err => {
      return err.response;
    });
  };
};

export const persistencia = () => {
  return dispacth => {
    return axios
      .get("/api/user/persistencia")
      .then(res => dispacth(getUser(res.data)));
  };
};

export const login = datos => {
  return dispacth => {
    return axios
      .post("/api/user/login", datos)
      .then(res => dispacth(getUser(res.data)))
      .catch(err => {
        return err.response;
      });
  };
};
