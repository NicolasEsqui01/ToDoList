import { ALL_NOTAS , SEARCH_NOTAS , VACIAR_SEARCH, ID_NOTA } from "../constants";

const inicialState = {
  notasUser: [],
  setSearch: [],
  idNota:{}
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case ALL_NOTAS:
      return { ...state, notasUser: action.notas };
    case SEARCH_NOTAS :
      return {...state, setSearch:action.notas };
    case VACIAR_SEARCH :
      return {...state, setSearch:[]}
    case ID_NOTA:
      return {...state, idNota:action.nota}
    default:
      return state;
  }
};
