import { useState } from "react";
import Axios from "axios";
import AuthContent from "./authContent";

const Signup = () => {
  const url = "http://localhost:3500/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await Axios.post(`${url}auth/signup`, {
        username: username,
        password: password,
      });
      const { message } = response.data;
      setMessage(message);
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
      authType={"signup"}
      handleAuth={handleSignup}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default Signup;
