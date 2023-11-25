import Axios from "axios";
const url = "http://localhost:3500/";

export const SignIn = async (userInfo) => {
  try {
    const response = await Axios.post(`${url}auth/signin`, {
      username: userInfo.username,
      password: userInfo.password,
    });
    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const SignUp = async (userInfo) => {
  try {
    console.log(userInfo.username, userInfo.password);
    const response = await Axios.post(`${url}auth/signup`, {
      username: userInfo.username,
      password: userInfo.password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
