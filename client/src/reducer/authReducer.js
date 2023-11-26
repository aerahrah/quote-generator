import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../constant/actionTypes";

const authReducer = (auth = null, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      if (!action.payload.token) return null;
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return action.payload;
    case SIGN_OUT:
      localStorage.clear();
      return null;
    default:
      return auth;
  }
};

export default authReducer;
