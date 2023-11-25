import { useState } from "react";
import { SignUp } from "../../services/authApi";
import AuthContent from "./authContent";

const Signup = () => {
  const [message, setMessage] = useState("");

  const handleSignup = (userInfo) => {
    console.log(userInfo);
    SignUp(userInfo)
      .then((data) => {
        const { message } = data.data;
        setMessage(message);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <AuthContent
      authType={"signup"}
      handleAuth={handleSignup}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default Signup;
