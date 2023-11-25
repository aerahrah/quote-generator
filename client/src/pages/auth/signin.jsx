import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../../utils/cookieUtils";
import { SignIn } from "../../services/authApi";

import AuthContent from "./authContent";

const Signin = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignin = (userInfo) => {
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

  return (
    <AuthContent
      authType={"signin"}
      handleAuth={handleSignin}
      message={message}
      setMessage={setMessage}
    />
  );
};
export default Signin;
