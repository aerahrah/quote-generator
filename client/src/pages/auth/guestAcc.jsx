import { setCookie, getCookie } from "../../utils/cookieUtils";
import { SignIn } from "../../services/authApi";

export const handleGuestSignin = async (setMessage, navigate) => {
  const userInfo = {
    username: "WiMt6FagfShTkTobAs76x9zCwgQ7MOid",
    password: "hdUCnPLZ4oBGPhFy7Wz6DalGpJZhhJhL",
  };
  SignIn(userInfo)
    .then((data) => {
      const { message, token } = data.data;
      setMessage(message);
      setCookie("token", token, 1);
      navigate("/quote-generator");
    })
    .catch((error) => {
      setMessage(error.response.data.message);
    });
};
