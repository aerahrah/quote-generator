import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { setCookie, getCookie } from "../../utils/cookieUtils";
import AuthContent from "./authContent";

const Signin = () => {
  const url = "http://localhost:3500/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignin = async () => {
    try {
      const response = await Axios.post(`${url}auth/signin`, {
        username: username,
        password: password,
      });
      const { message, token } = response.data;
      setMessage(message);
      setCookie("token", token, 1);
      navigate("/quote-generator");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  return (
    <AuthContent
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      authType={"signin"}
      handleAuth={handleSignin}
      message={message}
      setMessage={setMessage}
    />
  );
};
export default Signin;
