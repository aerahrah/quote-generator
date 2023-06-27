import { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Timer from '../utils/messageTimeout';
import AuthWrapper from './authwrapper';
import { HandleGuestSignin } from './guestAcc';

const Signup = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:3500/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await Axios.post(`${url}auth/signup`, { username: username, password: password });
      const { message } = response.data;
      setMessage(message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <AuthWrapper>
        <div className="flex flex-col bg-gray-800 px-10 py-12 rounded-lg shadow-xl">
          <h2 className="text-4xl mb-6 uppercase font-bold">Sign up</h2>
          <input
            className="input-box my-3 focus:border-blue-500 focus:border-2"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-box focus:border-blue-500 focus:border-2 mb-6"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={`w-72 transition duration-200 ${message ? 'scale-100' : 'scale-0'} mb-6`}>
            {message && <p>{message}</p>}
          </div>
          <Timer message={message} setMessage={setMessage} />
          <button className="btn bg-blue-600" onClick={handleSignup}>
            Sign up
          </button>
          <button className="btn bg-green-600" onClick={() => HandleGuestSignin(setMessage, navigate)}>
            Sign in with guest account
          </button>
          <Link className="text-gray-500" to="/signin">
            Sign in
          </Link>
        </div>
      </AuthWrapper>
    </>
  );
};

export default Signup;
