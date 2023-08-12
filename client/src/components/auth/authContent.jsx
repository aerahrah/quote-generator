import { Link, useNavigate } from "react-router-dom";
import Timer from "../utils/messageTimeout";
import { HandleGuestSignin } from "./guestAcc";
import { ErrorMessage } from "../utils/errorUtils";
import Footer from "../footer";
const AuthContent = ({
  username,
  setUsername,
  password,
  setPassword,
  authType,
  handleAuth,
  message,
  setMessage,
}) => {
  const navigate = useNavigate();
  return (
    <menu className="w-full h-screen text-center p-8 text-stone-200 bg-gray-900">
      <div className="flex items-center gap-12 flex-col justify-center w-full m-auto h-full -translate-y-8 lg:flex-row">
        <h1 className="text-blue-400 text-6xl md:text-7xl lg:text-8xl font-black capitalize lg:w-1/2 lg:-translate-y-16 animate-pulse">
          Quote Generator
        </h1>
        <div className="flex flex-col bg-gray-800 px-10 py-12 rounded-lg shadow-xl">
          {<ErrorMessage />}
          <h1 className="text-4xl uppercase mb-6 font-semibold">
            {authType === "signin" ? "Sign in" : "Sign up"}
          </h1>
          <input
            className="input-box my-3"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-box mb-6"
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

          <button className="btn bg-blue-600" onClick={handleAuth}>
            {authType === "signin" ? "Sign in" : "Sign up"}
          </button>

          <button
            className="btn bg-green-600"
            onClick={() => HandleGuestSignin(setMessage, navigate)}
          >
            Sign in with guest account
          </button>
          {authType === "signin" ? (
            <Link className="text-gray-500" to="/">
              Sign up
            </Link>
          ) : (
            <Link className="text-gray-500" to="/signin">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </menu>
  );
};

export default AuthContent;
