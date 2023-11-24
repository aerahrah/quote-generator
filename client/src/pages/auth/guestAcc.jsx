import Axios from "../../utils/axiosUtils";
import { setCookie, getCookie } from "../../utils/cookieUtils";

export const HandleGuestSignin = async (setMessage, navigate) => {
  const url = "http://localhost:3500/";
  const guestUsername = "WiMt6FagfShTkTobAs76x9zCwgQ7MOid";
  const guestPassword = "hdUCnPLZ4oBGPhFy7Wz6DalGpJZhhJhL";
  try {
    const response = await Axios.post(`${url}auth/signin`, {
      username: guestUsername,
      password: guestPassword,
    });
    const { message, token } = response.data;
    setMessage(message);
    setCookie("token", token, 1);
    navigate("/quote-generator");
  } catch (error) {
    setMessage(error.response.data.message);
  }
};
