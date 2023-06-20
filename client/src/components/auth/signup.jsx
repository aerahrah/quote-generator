import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate  } from "react-router-dom";
import Timer from "../utils/messageTimeout";
import { setCookie, getCookie } from "../utils/cookieUtils";

const Signup = () =>{
    const navigate = useNavigate();
    const url ="http://localhost:3500/";
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const guestUsername = "WiMt6FagfShTkTobAs76x9zCwgQ7MOid"
    const guestPassword = "hdUCnPLZ4oBGPhFy7Wz6DalGpJZhhJhL"
    const handleSignup = async() =>{
        try {
            const response = await Axios.post(`${url}auth/signup`,  {username: username, password: guestPassword})
            const {message} = response.data;
            setMessage(message)
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    const handleGuestSignin = async() =>{
        try {
            const response = await Axios.post(`${url}auth/signin`,{username:guestUsername,password: guestPassword})
            const {message, token} = response.data;
            setMessage(message);
            setCookie("token", token, 1)
            navigate("/quote-generator");
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    return (
        <>
        <menu className="w-full h-screen text-center">
            <div className="flex items-center justify-center w-96 m-auto h-full">
                <div className="flex flex-col m-2 bg-gray-100 px-10 py-12 rounded-lg shadow-md">
                <h2 className="text-3xl mb-6 uppercase font-semibold">Sign up</h2>
                <input 
                className="w-72 my-3 px-2 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
                type="text" 
                placeholder="username"
                value= {username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                className="w-72 px-2 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 mb-6"
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div className={`transition duration-200 transform scale-${message ? '100' : '0'} mb-6`}>
                    {message && <p>{message}</p>}
                </div>
                <Timer message={message} setMessage={setMessage} />
                <button className="bg-blue-400 mb-3 px-2 py-2 rounded-lg shadow-sm hover:bg-opacity-75 focus:shadow-md transition duration-100 ease-in-out" onClick={handleSignup}>Sign up</button>
                <button className="bg-green-400 mb-3 px-2 py-2 rounded-lg shadow-sm hover:bg-opacity-75 focus:shadow-md transition duration-100 ease-in-out" onClick={handleGuestSignin}>Sign in with guest account</button>
                <Link className="text-gray-500" to = "/signin">Sign in</Link>
            </div>
            </div>
        </menu>
        </>
    )
}

export default Signup