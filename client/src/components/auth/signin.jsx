import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../utils/cookieUtils";
import AuthWrapper from "./authwrapper";
import Timer from "../utils/messageTimeout";
import { HandleGuestSignin } from "./guestAcc";
import { ErrorMessage } from "../utils/errorUtils";

const Signin = () => {
  const navigate = useNavigate();
  const url = "http://localhost:3500/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    <>
      <AuthWrapper>
        <div className="flex flex-col bg-gray-800 px-10 py-12 rounded-lg shadow-xl">
          {<ErrorMessage />}
          <h1 className="text-4xl uppercase mb-6 font-semibold">Sign In</h1>
          <input
            className="input-box my-3 focus:border-blue-500 focus:border-2"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-box focus:border-blue-500 focus:border-2 mb-6"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className={`w-72 transition duration-200 ${
              message ? "scale-100" : "scale-0"
            } mb-6`}
          >
            {message && <p>{message}</p>}
          </div>
          <Timer message={message} setMessage={setMessage} />
          <button className="btn bg-blue-600" onClick={handleSignin}>
            Sign in
          </button>
          <button
            className="btn bg-green-600"
            onClick={() => HandleGuestSignin(setMessage, navigate)}
          >
            Sign in with guest account
          </button>
          <Link className="text-gray-500" to="/">
            Sign up
          </Link>
        </div>
      </AuthWrapper>
    </>
  );
};
export default Signin;
